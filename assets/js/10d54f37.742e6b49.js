"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2726],{8996:(e,l,o)=>{o.r(l),o.d(l,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=o(5893),n=o(1151);const s={title:"MLflow 1.14.0",authors:["mlflow-maintainers"]},r=void 0,i={permalink:"/mlflow-site-refresh/releases/2021/02/20/1.14.0-release",source:"@site/releases/2021-02-20-1.14.0-release.md",title:"MLflow 1.14.0",description:"We are happy to announce the availability of MLflow 1.14.0!",date:"2021-02-20T00:00:00.000Z",formattedDate:"February 20, 2021",tags:[],readingTime:1.055,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.14.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.14.1",permalink:"/mlflow-site-refresh/releases/2021/03/01/1.14.1-release"},nextItem:{title:"MLflow 1.13.1",permalink:"/mlflow-site-refresh/releases/2020/12/31/1.13.1-release"}},a={authorsImageUrls:[void 0]},d=[];function c(e){const l={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.p,{children:["We are happy to announce the availability of ",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.14.0",children:"MLflow 1.14.0"}),"!"]}),"\n",(0,t.jsx)(l.p,{children:"In addition to bug and documentation fixes, MLflow 1.14.0 includes the following features and improvements:"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["MLflow's model inference APIs (",(0,t.jsx)(l.code,{children:"mlflow.pyfunc.predict"}),"), built-in model serving tools (",(0,t.jsx)(l.code,{children:"mlflow models serve"}),"), and model signatures now support tensor inputs. In particular, MLflow now provides built-in support for scoring PyTorch, TensorFlow, Keras, ONNX, and Gluon models with tensor inputs. For more information, see ",(0,t.jsx)(l.a,{href:"https://mlflow.org/docs/latest/models.html#deploy-mlflow-models",children:"https://mlflow.org/docs/latest/models.html#deploy-mlflow-models"})," (#3808, #3894, #4084, #4068 @wentinghu; #4041 @tomasatdatabricks, #4099, @arjundc-db)"]}),"\n",(0,t.jsxs)(l.li,{children:["Add new ",(0,t.jsx)(l.code,{children:"mlflow.shap.log_explainer"}),", ",(0,t.jsx)(l.code,{children:"mlflow.shap.load_explainer"})," APIs for logging and loading ",(0,t.jsx)(l.code,{children:"shap.Explainer"})," instances (#3989, @vivekchettiar)"]}),"\n",(0,t.jsxs)(l.li,{children:["The MLflow Python client is now available with a reduced dependency set via the ",(0,t.jsx)(l.code,{children:"mlflow-skinny"})," PyPI package (#4049, @eedeleon)"]}),"\n",(0,t.jsxs)(l.li,{children:["Add new ",(0,t.jsx)(l.code,{children:"RequestHeaderProvider"})," plugin interface for passing custom request headers with REST API requests made by the MLflow Python client (#4042, @jimmyxu-db)"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"mlflow.keras.log_model"})," now saves models in the TensorFlow SavedModel format by default instead of the older Keras H5 format (#4043, @harupy)"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"mlflow_log_model"})," now supports logging MLeap models in R (#3819, @yitao-li)"]}),"\n",(0,t.jsxs)(l.li,{children:["Add ",(0,t.jsx)(l.code,{children:"mlflow.pytorch.log_state_dict"}),", ",(0,t.jsx)(l.code,{children:"mlflow.pytorch.load_state_dict"})," for logging and loading PyTorch state dicts (#3705, @shrinath-suresh)"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.code,{children:"mlflow gc"})," can now garbage-collect artifacts stored in S3 (#3958, @sklingel)"]}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["For a comprehensive list of changes, see the ",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.14.0",children:"release change log"}),", and check out the latest documentation on ",(0,t.jsx)(l.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,l,o)=>{o.d(l,{Z:()=>i,a:()=>r});var t=o(7294);const n={},s=t.createContext(n);function r(e){const l=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:l},e.children)}}}]);