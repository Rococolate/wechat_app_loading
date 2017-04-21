const __data__ = {
  show:false
}

const __fn__ = {
  ComponentLoadingShow(){
    this.data.ComponentLoadingData.show = true;
    const ComponentLoadingData = this.data.ComponentLoadingData;
    this.setData({
      ComponentLoadingData
    })
  },
  ComponentLoadingHide(){
    this.data.ComponentLoadingData.show = false;
    const ComponentLoadingData = this.data.ComponentLoadingData;
    this.setData({
      ComponentLoadingData
    })
  },
}

module.exports = function ComponentLoading(pageContext) {
  const ComponentLoadingData = Object.assign({},__data__);
  pageContext.setData({
    ComponentLoadingData
  });
  Object.assign(pageContext,__fn__);
}
