import React from 'react';
import {Input, Row, Button, Tooltip, Col } from 'antd';

import './App.css';
import tx01 from './tx01.svg';
import tx02 from './tx02.svg';
import tx03 from './tx03.svg';
import tx04 from './tx04.svg';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/zh-cn';

dayjs.extend(LocalizedFormat);
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');


const { TextArea } = Input;

class App extends React.Component {
  state = {
    tweet:"",
    tweets: [{
      avatar:tx02,
      username:"吃吃",
      tweet:"今天晴天，火锅串串钵钵鸡，奈雪喜茶一点点，下雨了打火锅，下雪了吃羊肉，冬至吃饺子，过年吃腊肉。",
      timestamp:"1577265753"
    },
    {
      avatar:tx03,
      username:"邪见冥加",
      tweet:"邪见，即邪恶之见，或者指错误的观点。喜剧角色身份，常会有些出乎人意料的言语和行为。",
      timestamp:"1577262612"
    },
    {
      avatar:tx04,
      username:"日暮山山山",
      tweet:"墨点无多泪点多，山河仍是旧山河。横流乱世杈椰树，留得文林细揣摹",
      timestamp:"1577259308"
    }],
    n: 0,
  }



  onChange = ({ target: { value } }) => {
    const tweet = value.replace(/[\r\n\t]/g,'');
    this.setState({ tweet });
  };

  onPublish = ()=>{
    const newTweet = {
      avatar:tx01,
      username:"User",
      tweet:this.state.tweet.trimLeft().trimRight(),
      timestamp: dayjs().unix(),
    }
    this.setState({
      tweet:"",
      tweets: [newTweet, ...this.state.tweets]
    })
  }

  componentDidMount(){
    this.timerID = setInterval (
      () => this.tick(),
      5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      n:new Date()
    })
  }

  render() {  
    const { tweet,tweets } = this.state
    const tweetLength = tweet.length;
    return (
      <div style={{ width: 800, margin: '100px auto' }}>
       <div style={{ margin: '24px 0' }} />
        <TextArea 
        onChange={this.onChange} 
        maxLength="500" 
        id="studyIdea" 
        placeholder="发布内容" 
        rows="3"  
        value={tweet}
        />
        <Row type="flex" align="middle" justify="end" >
        <div style={{ marginRight: 8 }} >
          <span className={tweetLength > 140 ? "count-alert" : ""}>{tweetLength}</span>/140
        </div>
        <Button onClick={this.onPublish} disabled={(tweetLength > 140 || tweetLength <=0)}>发布</Button>
        </Row>
        {
          tweets.map(tweet => (
          <Row gutter={[8, 34]} type="flex" align="top" justify="start" key={tweet.timestamp}>
            <Col span={2}> <img src={tweet.avatar} className="App-t" alt="头像" /></Col>
            <Col span={22} style={{ borderBottom: 'thin solid #e9e9e9',marginBottom:32 }}><h3>{tweet.username}</h3><p>{tweet.tweet}</p>
              <Tooltip title={dayjs(tweet.timestamp*1000).format('YYYY-MM-DD HHs:mm:ss')}>
                <span>{dayjs().to(tweet.timestamp*1000)}</span>
              </Tooltip>    
            </Col> 
          </Row> 
          ))
        }
      </div>
    );
  }
}

export default App;

