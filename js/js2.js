var glb={
	d:document,nau:navigator.userAgent,
	getId:function(id){return this.d.getElementById(id)},
	newElem:function(o){return this.d.createElement(o);},
	getElems:function(el,o){return el.getElementsByTagName(o);},
	getClass:function(cn,el,nd){
		var testClass=new RegExp("\\b"+cn+"\\b"),ar=[],el=el||this.d,nd=nd||'*',tag=this.getElems(el,nd),len=tag.length;
		for(var i=0;i<len;i++){var cel=tag[i];if(testClass.test(cel.className)){ar.push(cel);};};
		return ar;
	},
	st:function(){return (this.d.body.scrollTop)?this.d.body.scrollTop:this.d.documentElement.scrollTop;},
	ww:function(){return (this.d.documentElement&&this.d.documentElement.clientWidth)?this.d.documentElement.clientWidth:this.d.body.offsetWidth;},
	wh:function(){return (this.d.documentElement&&this.d.documentElement.clientHeight)?this.d.documentElement.clientHeight:this.d.body.offsetHeight;},
	offset:function(o){var y=o.offsetTop;if(o.style.position=='absolute')return y;while(o=o.offsetParent){y+=o.offsetTop;}return y;},
	addEvent:function(a,b,c,d){if(a.addEventListener){a.addEventListener(b,c,d)}else if(a.attachEvent){a.attachEvent('on'+b,c)}},
	delEvent:function (a,b,c,d){if(a.removeEventListener){a.removeEventListener(b,c,d)}else if(a.detachEvent){a.detachEvent('on'+b,c)}},
	delayLoad:function(url,callback){
		var script=this.newElem('script');
		script.type="text/javascript";
		script.src=url;
		this.d.body.appendChild(script);
		if(script.readyState){
			script.onreadystatechange=function(){
				if(script.readyState=="loaded"||script.readyState=="complete"){
					script.onreadystatechange=null;
					if(callback){callback();};
				};
			};
		}else{
			script.onload=function(){if(callback){callback();};};
		};
	}
};
glb.brow={
	isLowBrow:!-[1,],
	isIE:/MSIE/i.test(glb.nau),
	loadAds:/Android|iPhone|iTouch|BlackBerry|IEMobile/i.test(glb.nau),
	isMobile:/Android|iPhone|iTouch|iPad|BlackBerry|IEMobile|Mobile/i.test(glb.nau)
};

var Main=function(){
	var self=this;
	this.setCotType=function(){return (glb.brow.isMobile)?'touchstart':'click';};
	this.ebody=glb.d.body;
	this.ehtml=glb.getElems(glb.d,'html')[0];
	this.mask=glb.newElem('div');

	this.ebody.appendChild(this.mask);
	this.eq=this.setCotType();
	this.breakpoint=768;
	this.initNavFunction();
	if(glb.brow.isMobile){this.ebody.className+=' mobileEM';}else{return;};
};


Main.prototype.initNavFunction=function(){
	var self=this,mainNav=glb.getId('mainNav'),navi=glb.getId('navi'),navSliderEvent=function(e){
		var e=e||window.event;
		e.preventDefault();
		var nowClass=mainNav.className;
		if(/\bfadeInLeft\b/i.test(nowClass)){mainNav.className=nowClass.replace(/fadeInLeft/,'fadeOutLeft');setNavHidn();return;};
		if(/\bfadeOutLeft\b/i.test(nowClass)){mainNav.className=nowClass.replace(/fadeOutLeft/,'fadeInLeft');setNavHidn(1);return;};
		mainNav.className+=' fadeOutLeft';
		var flag=(mainNav.style.cssText=='')?0:1;
		setNavHidn(flag);
	},setNavHidn=function(is){
		self.ebody.style.height=self.ehtml.style.height=(is)?'auto':'100%';
		self.ebody.style.overflowY=self.ehtml.style.overflowY=(is)?'auto':'hidden';
		self.mask.style.display=(is)?'none':'block';
		if(is){glb.delEvent(self.mask,self.eq,navSliderEvent,false);}else{glb.addEvent(self.mask,self.eq,navSliderEvent,false);};
	},screenChange=function(){
		if(glb.ww()>self.breakpoint){
			setNavHidn(1);
			mainNav.className='mnav';
		};
	};
	screenChange();
	glb.addEvent(navi,self.eq,navSliderEvent,false);
	glb.addEvent(window,'resize',screenChange,false);
};
Main.prototype.setNavHidn=function(is){
	var self=this;
	self.ebody.style.height=self.ehtml.style.height=(is)?'auto':'100%';
	self.ebody.style.overflowY=self.ehtml.style.overflowY=(is)?'auto':'hidden';
	self.mask.style.display=(is)?'none':'block';
};
Main.prototype.navSliderEvent=function(o){
	var nowClass=o.mainNav.className;
	if(/\bfadeInLeft\b/i.test(nowClass)){o.mainNav.className=nowClass.replace(/fadeInLeft/,'fadeOutLeft');o.setNavHidn(1);return;};
	if(/\bfadeOutLeft\b/i.test(nowClass)){o.mainNav.className=nowClass.replace(/fadeOutLeft/,'fadeInLeft');o.setNavHidn();return;};
	o.mainNav.className+=' fadeInLeft';
	o.setNavHidn();
};

var m=new Main();


	

speed_load=new Date();
