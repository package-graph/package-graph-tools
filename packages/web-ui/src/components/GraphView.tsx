import {useEffect, useState} from "react";
import {Graph, Model} from '@antv/x6';
import {GridLayout} from '@antv/layout';
import "./styles/index.css"
import ReactJson from "react-json-view";
import {Drawer, Tabs} from "@arco-design/web-react";
import G6 from "@antv/g6";
import {EdgeProps, GraphProps, GraphViewProps, NodeProps, TreeProps} from "../type.ts";
const TabPane = Tabs.TabPane;
type DataProps=GraphProps|TreeProps
const GraphView = (props:GraphViewProps) => {
    const {visible, setVisible,type} = props
    const [data, setData] = useState<DataProps>(
        {
            EdgeList: [], 
            NodeList: [], 
            children: [], 
            name: "", 
            treeId: "", 
            version: ""
        })
    useEffect(() => {
        type==='graph'&&fetch('graph.json').then(res => res.json()).then(data => {
            console.log(data)
            setData(data)
            const container=document.getElementById('graph')!;
            const width = container.scrollWidth;
            const height = container.scrollHeight || 500;
            const graph = new Graph({
                // mousewheel:{
                //     enabled:true,
                // },
                container: document.getElementById('graph')!,
                width,
                height,
                // grid: {
                //     size: 10,      // 网格大小 10px
                //     visible: true, // 渲染网格背景
                // },
            })
            const model: Model.FromJSONData = {
                nodes: [],
                edges: [],
            }
            data.NodeList.forEach((item:NodeProps) => {
                model.nodes!.push({
                    id: `${item.name}`,
                    shape: 'circle',
                    width: item.depth===0?250:200,
                    height: item.depth===0?250:200,
                    attrs: {
                        body: {
                            fill: '#5F95FF',
                            stroke: 'transparent',
                        },
                        label: {
                            fill: '#ffffff',
                        },
                    },
                    style: {
                        endArrow: true
                    },
                    label: `${item.name}\n${item.version}`,
                })
            })
            data.EdgeList.forEach((item:EdgeProps) => {
                model.edges?.push({
                    source: item.source.name,
                    target: item.target.name,
                    style: {
                        endArrow: true
                    },
                    attrs: {
                        line: {
                            stroke: '#A2B1C3',
                            strokeWidth: 2,
                            targetMarker: null,
                        },
                    },
                })
            })
            const gridLayout = new GridLayout({
                type: 'grid',
                width,
                height,
                sortBy: 'label',
            })
            const modelOrigin = gridLayout.layout(model as never)
            graph.fromJSON(modelOrigin)
            graph.centerContent()
        })
    }, [type])
    useEffect(() => {
        type==='tree'&&fetch('tree.json').then(res => res.json()).then(data => {
            setData(data)
            const container = document.getElementById('tree')!;
            const width = container.scrollWidth;
            const height = container.scrollHeight || 500;
            const graph = new G6.TreeGraph({
                container: 'tree',
                width,
                height,
                linkCenter: true,
                modes: {
                    default: [
                        {
                            type: 'collapse-expand',
                            onChange: function onChange(item, collapsed) {
                                const data = item!.get('model');
                                data.collapsed = collapsed;
                                return true;
                            },
                        },
                        // 'drag-canvas',
                        // 'zoom-canvas',
                    ],
                },
                defaultNode: {
                    size: 60,
                    style:{
                        lineWidth: 2
                    },
                    labelCfg:{
                        position:'center',
                        style:{
                            fontSize: 6,
                            textAlign: 'center',
                        }
                    }
                },
                layout: {
                    type: 'dendrogram',
                    preventOverlap: true,
                    preventOverlapPadding:20,
                    direction: 'H',
                    nodeSep: 75,
                    rankSep: 150,
                    // radial: true,
                },
            });
            graph.node(function (node) {
                return {
                    label: `${node.name}\n${node.version}`,
                };
            });
            graph.data(data);
            graph.render();
            graph.fitView();
            // graph.fitCenter();
            if (typeof window !== 'undefined')
                window.onresize = () => {
                    if (!graph || graph.get('destroyed')) return;
                    if (!container || !container.scrollWidth || !container.scrollHeight) return;
                    graph.changeSize(container.scrollWidth, container.scrollHeight);
                };
        })
    }, [type]);
    return (
        <>
            <div style={{height: "100vh", display: "flex", paddingTop: "60px"}}>
                {type==='graph'&&<div id={"graph"} style={{flex: "1"}}/>}
                {type==='tree'&&<div id={"tree"} style={{flex: "1"}}/>}
                <Drawer
                    placement={'left'}
                    width={350}
                    title={<span>NPM</span>}
                    mask={false}
                    visible={visible}
                    onCancel={() => {
                        setVisible(false);
                    }}
                    footer={null}
                >
                    <Tabs type={'rounded'} style={{overflow: "hidden"}}>
                        <TabPane key='1' title='依赖图'>
                            <ReactJson src={data} iconStyle={"circle"}></ReactJson>
                        </TabPane>
                        <TabPane key='2' title='循环依赖'>
                            暂无循环依赖
                        </TabPane>
                        <TabPane key='3' title='多版本'>
                            暂无多版本
                        </TabPane>
                        <TabPane key='4' title='多版本信息'>
                            暂无多版本信息
                        </TabPane>
                    </Tabs>
                </Drawer>
            </div>
        </>
    )
}
export default GraphView
