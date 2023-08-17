import {useEffect, useState} from "react";
import G6 from '@antv/g6';
import "./styles/index.css"
import ReactJson from "react-json-view";
const Graph=()=>{
    const [data,setData]=useState({} as any)
    useEffect(()=>{
        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
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
                        size: 26,
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
            <div style={{height:"100vh",display: "flex"}}>
                <div className="f-wrap-column" >
                    <input  className="pkgSearch" placeholder="请输入查找的包名" type="text" />
                    <ReactJson src={data} iconStyle={"circle"}></ReactJson>
                </div>
                <div id={"container"} style={{flex: "1"}}/>
                <div className="f-wrap-column" style={{width: "250px"}}>
                    <div className="f-wrap-column version">
                        <span className="pkgTitle">各个版本</span>
                    </div>
                    <div className="f-wrap-column version">
                        <span className="pkgTitle">循环引用</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Graph
