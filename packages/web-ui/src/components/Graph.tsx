import {Dispatch, SetStateAction, useEffect, useState} from "react";
import G6 from '@antv/g6';
import "./styles/index.css"
import ReactJson from "react-json-view";
import {Drawer, Tabs} from "@arco-design/web-react";
const TabPane = Tabs.TabPane;
const Graph=(props: { visible: boolean;setVisible:Dispatch<SetStateAction<boolean>>; })=>{
    const {visible,setVisible}=props
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                const container = document.getElementById('container')!;
                const width = container.scrollWidth;
                const height = container.scrollHeight || 500;
                const graph = new G6.TreeGraph({
                    container: 'container',
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
                            'drag-canvas',
                            'zoom-canvas',
                        ],
                    },
                    defaultNode: {
                        size: 60,
                        labelCfg: {
                            position:'center',
                            style: {
                                lineWidth:30,
                                fontSize: 10,
                                textAlign: 'center',
                                fontStyle: 'bold',
                            }
                        }
                    },
                    layout: {
                        type: 'dendrogram',
                        direction: 'LR',
                        nodeSep: 20,
                        rankSep: 100,
                        radial: true,
                    },
                });
                graph.node(function (node) {
                    return {
                        label: node.id,
                    };
                });
                graph.data(data);
                graph.render();
                graph.fitView();
                if (typeof window !== 'undefined')
                    window.onresize = () => {
                        if (!graph || graph.get('destroyed')) return;
                        if (!container || !container.scrollWidth || !container.scrollHeight) return;
                        graph.changeSize(container.scrollWidth, container.scrollHeight);
                    };
            });
    },[])
    return(
        <>
            <div style={{height:"100vh",display: "flex",paddingTop:"60px"}}>
                <div id={"container"} style={{flex: "1"}}/>
                <Drawer
                    placement={'left'}
                    width={400}
                    title={<span>NPM </span>}
                    mask={false}
                    visible={visible}
                    onCancel={() => {
                        setVisible(false);
                    }}
                    footer={null}
                >
                    <Tabs type={'rounded'} style={{overflow:"hidden"}}>
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
export default Graph
