import {Button, Input, Link, Switch} from '@arco-design/web-react';
import {IconMinus, IconMoon, IconPlus, IconSun} from "@arco-design/web-react/icon";
import {useEffect, useState} from "react";
import {HeaderProps} from "../type.ts";

const InputSearch = Input.Search;
const Header= (props:HeaderProps)=>{
   const {visible,setVisible,type,setType}=props
    const [dark,setDark]=useState(true)
    const handleVisible=()=>{
       setVisible(!visible)
    }
    const handleDark=()=>{
       setDark(!dark)
    }
    useEffect(() => {
        dark
            ? document.body.removeAttribute('arco-theme')
            : document.body.setAttribute('arco-theme', 'dark')
    }, [dark]);
    return (
        <div className={"header"}>
            <div className={"left"}>
                <div className={"logo"}>
                    Package Graph Tools
                </div>
            </div>
            <div className={"right"}>
                <InputSearch
                    searchButton='搜索'
                    placeholder='搜索依赖'
                    style={{ width: 300 }}
                />
                {/*<Button icon={<IconShrink />}>*/}
                {/*    折叠节点*/}
                {/*</Button>*/}
                <Button icon={visible?<IconMinus/>:<IconPlus/>} onClick={handleVisible}>
                    {visible?'关闭':'打开'}信息框
                </Button>
                <Button onClick={()=>setType(type==='tree'?'graph':'tree')}>
                    {`切换至${type==='tree'? '图':'树'}`}
                </Button>
                <Switch
                    type='round'
                    checkedIcon={<IconMoon /> }
                    uncheckedIcon={<IconSun />}
                    onChange={handleDark}
                />
                <Link
                    href={"https://package-graph.github.io/package-graph-tools"}
                    className="link"
                >
                    中文文档
                </Link>
                <Link
                    href='https://github.com/package-graph/package-graph-tools'
                    // icon={<IconGithub />}
                >
                    Github
                </Link>
            </div>
        </div>
    )
}
export default Header
