import React from "react"

function ReactCusdis(props) {
  const divRef = React.useRef(null)
  const host = props.attrs.host || "https://cusdis.com"
  React.useEffect(() => {
    let langScript
    if (props.lang) {
      const script = document.createElement("script")
      script.src = `${host}/js/widget/lang/${props.lang}.js`
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }
    const script = document.createElement("script")
    script.src = `${host}/js/cusdis.es.js`
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
      if (langScript) {
        document.body.removeChild(langScript)
      }
    }
  }, [])
  React.useLayoutEffect(() => {
    // @ts-expect-error
    const render = window.renderCusdis
    if (render) {
      render(divRef.current)
    }
  }, [
    props.attrs.appId,
    props.attrs.host,
    props.attrs.pageId,
    props.attrs.pageTitle,
    props.attrs.pageUrl,
    props.lang,
  ])
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", {
      id: "cusdis_thread",
      "data-host": host,
      "data-page-id": props.attrs.pageId,
      "data-app-id": props.attrs.appId,
      "data-page-title": props.attrs.pageTitle,
      "data-page-url": props.attrs.pageUrl,
      style: props.style,
      ref: divRef,
    }),
    React.createElement("script", {
      defer: true,
      async: true,
      src: `${props.attrs.host}/js/cusdis.es.js`,
    })
  )
}

export default ReactCusdis
