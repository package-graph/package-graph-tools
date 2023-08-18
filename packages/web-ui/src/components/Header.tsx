import {Button, Input, Link, Switch} from '@arco-design/web-react';
import {IconGithub, IconMinus, IconMoon, IconPlus, IconShrink, IconSun} from "@arco-design/web-react/icon";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
const InputSearch = Input.Search;
const Header= (props: { visible: boolean; setVisible:Dispatch<SetStateAction<boolean>>;})=>{
   const {visible,setVisible}=props
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
    // const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    // darkThemeMq.addListener(e => {
    //     if (e.matches) {
    //         document.body.setAttribute('arco-theme', 'dark');
    //     } else {
    //         document.body.removeAttribute('arco-theme');
    //     }
    // });
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
                    style={{ width: 400 }}
                />
                <Button icon={<IconShrink />}>
                    折叠节点
                </Button>
                <Button icon={visible?<IconMinus/>:<IconPlus/>} onClick={handleVisible}>
                    {visible?'关闭':'打开'}信息框
                </Button>
                <Button>
                    切换图表
                </Button>
                <Switch
                    type='round'
                    checkedIcon={<IconMoon /> }
                    uncheckedIcon={<IconSun />}
                    onChange={handleDark}
                />
                <div className="link">
                    <a href="">中文文档</a>
                </div>
                <Link
                    style={{color:"black"}}
                    hoverable={false}
                    href='https://github.com/package-graph/package-graph-tools'
                    icon={<IconGithub />}>
                    Github
                </Link>
            </div>
        </div>
    )
}
export default Header
