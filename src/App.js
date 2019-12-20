import React from 'react';
import ReactDOM from 'react-dom';
import {Input} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import tx01 from './tx01.svg';
import tx02 from './tx02.svg';
import tx03 from './tx03.svg';
import tx04 from './tx04.svg';


const { TextArea } = Input;

class App extends React.Component {
  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  changeData=(input)=>{
    const textLength = input.target.value.length;
    ReactDOM.render(textLength, document.getElementById('num'));
}

inputOnBlur(){
}
  keypress(input){
    console.log(input.target.value);
    const text = input.target.value;
    ReactDOM.render(<div className="App-l" >
    <img src={tx01} className="App-t" alt="头像" />
    <div className="App-k">
    <h3>User</h3>
    <p>{text}</p>
    <span >1分钟前</span>
    </div>
  </div>, document.getElementById('test'));
  }

  render() {   
    return (
      <div style={{ width: 800, margin: '100px auto' }}>
       <div style={{ margin: '24px 0' }} />
        <TextArea  onChange={(e)=>this.changeData(e)} 
        maxlength="500" id="studyIdea" 
        placeholder="发布内容" rows="3"  
        onBlur={this.inputOnBlur } 
        onKeyPress = {this.keypress} 
        onPressEnter={this.startSearch}/>
        <div  style={{ float:'right' }} ><span id="num">0</span>/140</div>
        <div id="test"></div>
        <div className="App-l" >
          <img src={tx02} className="App-t" alt="头像" />
          <div className="App-k">
          <h3>吃吃</h3>
          <p>今天晴天，火锅串串钵钵鸡，奈雪喜茶一点点，下雨了打火锅，下雪了吃羊肉，冬至吃饺子，过年吃腊肉。</p>
          <span >8分钟前</span>
          </div>
        </div>
        <div className="App-l" >
        <img src={tx03} className="App-t" alt="头像" />
          <div className="App-k">
          <h3>邪见冥加</h3>
          <p>邪见，即邪恶之见，或者指错误的观点。喜剧角色身份，常会有些出乎人意料的言语和行为。</p>
          <span >13分钟前</span>
          </div>
        </div>
        <div className="App-l" >
        <img src={tx04} className="App-t" alt="头像" />
          <div className="App-k">
          <h3>日暮山山山</h3>
          <p>墨点无多泪点多，山河仍是旧山河。横流乱世杈椰树，留得文林细揣摹。</p>
          <span >20分钟前</span>
          </div>
        </div>
      </div>
      
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));