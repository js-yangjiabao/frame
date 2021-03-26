import Vue from 'vue';
import axios from 'axios';
import './style.css';


new Vue({
  el: '#app',
  data:{
    info: [],
    init: 'styleTop',
    next: 'activeTop',
    isShow: false,
    currIndex: 0,
  },
  created(){
    this.doaxios('');
    this.$refs.className = 'activeTop';
  },
  methods: {
    doaxios(url){
      return axios.get(`https://cnodejs.org/api/v1/topics${url}`).then(response=>{
        // console.log(response.data.data);
        this.info = response.data.data;
      }).catch(err=>{
        console.log(err);
      });
    },
    clickAll(index){
      this.doaxios('');
      this.currIndex = index;
    },
    clickGood(index){
      this.doaxios('?tab=good');
      this.currIndex = index;
    },
    clickShare(index){
      this.doaxios('?tab=share');
      this.currIndex = index;
    },
    clickAsk(index){
      this.doaxios('?tab=ask');
      this.currIndex = index;
    },
    clickJob(index){
      this.doaxios('?tab=job');
      this.currIndex = index;
    },
    first(){
      this.doaxios('?page=1');
    },
    second(){
      this.doaxios('?page=2');
    },
    third(){
      this.doaxios('?page=3');
    },
    fourth(){
      this.doaxios('?page=4');
    }
  },
  filters: {
    time(value){
      // console.log(this.now.getTime());
      // console.log(value);
      let now = new Date();
      let nCurr = now.getTime();
      let vCurr = new Date(value).getTime();
      // console.log(nCurr - vCurr);
      // console.log(parseInt((nCurr - vCurr)/1000/3600));
      let hour = parseInt((nCurr - vCurr)/1000/60);
      // console.log(hour + '分钟')
      if(hour >= 1  & hour < 60){
        return parseInt(hour) + '分钟前';
      }else if(hour >= 60 & hour <24 *60){
        return parseInt(hour / 60) + '小时前';
      }else if(hour >= 24 * 60 & hour <=720 *60){
        return parseInt(hour / 24 /60) + '天前';
      }else{
        return parseInt(hour / 720 /60) + '月前';
      } 
    }
  }
})