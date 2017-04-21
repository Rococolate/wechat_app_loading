const ComponentLoading = require('../component/loading/loading.js');
Page({
  data:{
    hello:'touch me',
  },
  tapEvent(){
    this.ComponentLoadingShow();
    setTimeout(() =>{
      this.ComponentLoadingHide();
    },4000);
  },
  onLoad(){
    ComponentLoading(this);
  }
});