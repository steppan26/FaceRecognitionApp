(this.webpackJsonpfacerecognitionapp=this.webpackJsonpfacerecognitionapp||[]).push([[0],{334:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),i=n(47),c=n.n(i),r=(n(85),n(20)),o=n(21),l=n(23),d=n(22),u=(n(86),n(2)),h=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(u.jsx)("nav",{className:"nav",style:{display:"flex",justifyContent:"flex-end"},children:Object(u.jsx)("p",{onClick:function(){return t("SignOut")},className:"f3 link dim black underline pa3 pointer",children:"Sign out"})}):Object(u.jsxs)("nav",{className:"nav",style:{display:"flex",justifyContent:"flex-end"},children:[Object(u.jsx)("p",{onClick:function(){return t("SignIn")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(u.jsx)("p",{onClick:function(){return t("Register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},b=(n(88),function(e){var t=e.imageUrl,n=e.box;return Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"faceRecognition-wrapper",children:[Object(u.jsx)("img",{id:"inputImage",src:t,alt:"",width:"500px",height:"auto"}),Object(u.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),m=n.p+"static/media/brain.da59baac.png",p=n(79),j=n.n(p),g=(n(89),function(){return Object(u.jsx)("div",{children:Object(u.jsx)(j.a,{className:"Tilt",options:{max:55},style:{height:150,width:150},children:Object(u.jsx)("div",{className:"Tilt-inner",children:Object(u.jsx)("img",{src:m,alt:"logo"})})})})}),f=(n(90),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://smart-brain-faceapp1.herokuapp.com/signin",{method:"post",headers:{"content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(u.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSubmitSignIn})}),Object(u.jsx)("div",{className:"lh-copy mt3",children:Object(u.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(a.Component)),x=(n(91),function(e){var t=e.name,n=e.entries;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"rankText",children:"".concat(t,", your current entry count is ...")}),Object(u.jsx)("div",{className:"rankValue",children:n})]})}),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://smart-brain-faceapp1.herokuapp.com/register",{method:"post",headers:{"content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:this.onSubmitSignIn})})]})})})}}]),n}(a.Component),v=n(80),w=n.n(v),N=(n(334),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"This Magic Brain app will detect faces in your pictures. Give it a try!"}),Object(u.jsxs)("div",{className:"center",children:[Object(u.jsx)("input",{type:"text",onChange:t}),Object(u.jsx)("button",{onClick:n,children:"Detect"})]})]})}),C=(n(335),{particles:{number:{value:10,density:{enable:!0,value_area:600}},color:{value:"red"}},line_linked:{enable_auto:!0}}),S={input:"",imageUrl:"",box:{},route:"SignIn",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://smart-brain-faceapp1.herokuapp.com/imageurl",{method:"post",headers:{"content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://smart-brain-faceapp1.herokuapp.com/image",{method:"put",headers:{"content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"SignOut"===t?e.setState(S):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"SignIn",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.box;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(w.a,{className:"particles",params:C}),Object(u.jsx)(h,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{}),Object(u.jsx)(x,{name:this.state.user.name,entries:this.state.user.entries}),Object(u.jsx)(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(u.jsx)(b,{box:s,imageUrl:n})]}):"SignIn"===a?Object(u.jsx)(f,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(u.jsx)(O,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,337)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),k()},85:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){}},[[336,1,2]]]);
//# sourceMappingURL=main.3aebbb13.chunk.js.map