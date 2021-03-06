import React from 'react'
import Axios from 'axios'
import { Parallax } from 'rc-scroll-anim';
import { Divider, Modal, Button  } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './Thought.css'
import "antd/dist/antd.css";

import logo from '../../assets/img/logo.png'
import Topbar from '../../component/Topbar/Topbar'
import NavBar from '../../component/NavBar/NavBar'
import Article from './article'

class Thoughts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articles:[],
            currentArticle:{},
            visible:false
        }
        this.showModal = this.showModal.bind(this);

    }
    componentWillMount() {
        this.getArticleList()
    }
    showModal = (article) => {
        this.setState({
          visible: true,
          currentArticle:article,
        });
        console.log('click')
    };

    handleCancel = e => {
    console.log(e);
    this.setState({
        visible: false,
    });
    };
    
    getArticleList(){
        const url = 'https://api.github.com/repos/Mynany/articles/issues'
        Axios.get(url).then((response) => {
            const articles = response.data;
            const currentArticle = articles[0];
            this.setState({ articles, currentArticle });
          }).catch(e => console.log(e));
    }
    
    render(){
        console.log(this.state.articles)
        return (
            
            <div>
            {/* <Topbar></Topbar> */}
            <NavBar></NavBar>
                <div className="articlelist">
                    <QueueAnim delay={300} className="queue-simple">
                        {this.state.articles.map((article) => {
                            return (
                                <div key={article.number} onClick={() => this.showModal(article)} style={{cursor:'pointer'}}>
                                    <div className="articlelistitem">
                                        {article.title}
                                        <hr style={{marginLeft:'45%',marginRight:'45%'}}></hr>
                                    </div>
                                    {/* <div className="itemIntro">
                                        At {article.created_at}  By {article.user.login}
                                    </div> */}
                                </div>
                            )
                            
                        })}
                        <Modal
                            // title={this.state.currentArticle.title}
                            visible={this.state.visible}
                            // onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            width='80%'
                            >
                            <Article data={this.state.currentArticle}></Article>
                            
                        </Modal>
                    </QueueAnim>

           </div>
            </div>
          
        )
    }
}

export default Thoughts