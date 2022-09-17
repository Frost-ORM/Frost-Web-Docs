import React, { useEffect, useMemo, useState } from "react";
import OriginalNavBarItem from '@theme-original/NavbarItem';
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function ApiNavbarItem(props) {

  return (
    <BrowserOnly>
      {()=><NavbarItem {...props}/>}
    </BrowserOnly>
    )
}
function NavbarItem(props) {
    const location = useLocation()
    const context = useDocusaurusContext();
    const [version, setVersion] = useState(window.localStorage.getItem('docs-preferred-version-default') )
    const defaultDoc = useMemo(() => (context.globalData["docusaurus-plugin-content-docs"].default as any)?.versions.find(({isLast})=>isLast), [context])
    const to = useMemo(() => ((version)?`/${version}/api/modules`:"/api/modules"), [version])
    useEffect(() => {
      let _version = window.localStorage.getItem('docs-preferred-version-default')
      setVersion( _version === defaultDoc.name? undefined : _version)
      
    })
    
    return (
        <>
          <OriginalNavBarItem {...props} type={"docsVersion"} to={to}/>
        </>
      )
}