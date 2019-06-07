import React from 'react'
import marked from 'marked'
import Prism from 'prismjs'
import moment from 'moment'

const renderer = new marked.Renderer()
renderer.link = (href, title, text) => `<a target="_blank" href="${href}" title="${title}">${text}</a>`

marked.setOptions({
  highlight(code, lang) {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang)
    }
    return code
  }
})

class Article extends React.Component{
    resetScrollTop() {
        this.refs.article && (this.refs.article.scrollTop = '0px')
      }
    render(){
        const { 
            body, 
            title, 
            html_url, 
            labels, 
            created_at,
            needLoginGithub
          } = this.props.data

          if (!body) {
            return (<div>


            </div>)
          }
          const html = marked(body, {renderer})

        return(
            <div>

                <h1> {title} </h1>
                <a target="_blank" href={html_url}>[原文链接]</a>
                <span>{ moment(created_at).format('YYYY-MM-DD') }</span>

                <div dangerouslySetInnerHTML={{__html:html}} />

            </div>
        )
    }
}

export default Article