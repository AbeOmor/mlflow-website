"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6058],{5505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(5893),o=t(1151);const r={title:"MLflow 1.24.0",slug:"1.24.0",authors:["mlflow-maintainers"]},l=void 0,s={permalink:"/mlflow-website/releases/1.24.0",source:"@site/releases/2022-02-28-1.24.0-release.md",title:"MLflow 1.24.0",description:"We are happy to announce the availability of MLflow 1.24.0!",date:"2022-02-28T00:00:00.000Z",formattedDate:"February 28, 2022",tags:[],readingTime:1.98,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.24.0",slug:"1.24.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.26.0",permalink:"/mlflow-website/releases/1.26.0"},nextItem:{title:"MLflow 1.23.1",permalink:"/mlflow-website/releases/1.23.1"}},a={authorsImageUrls:[void 0]},c=[];function d(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["We are happy to announce the availability of ",(0,i.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.24.0",children:"MLflow 1.24.0"}),"!"]}),"\n",(0,i.jsx)(n.p,{children:"MLflow 1.24.0 includes several major features and improvements:"}),"\n",(0,i.jsx)(n.p,{children:"Features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[Tracking] Support uploading, downloading, and listing artifacts through the MLflow server via ",(0,i.jsx)(n.code,{children:"mlflow server --serve-artifacts"})," (#5320, @BenWilson2, @harupy)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Tracking] Add the ",(0,i.jsx)(n.code,{children:"registered_model_name"})," argument to ",(0,i.jsx)(n.code,{children:"mlflow.autolog()"})," for automatic model registration during autologging (#5395, @WeichenXu123)"]}),"\n",(0,i.jsx)(n.li,{children:'[UI] Improve and restructure the Compare Runs page. Additions include "show diff only" toggles and scrollable tables (#5306, @WeichenXu123)'}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Introduce ",(0,i.jsx)(n.code,{children:"mlflow.pmdarima"})," flavor for pmdarima models (#5373, @BenWilson2)"]}),"\n",(0,i.jsx)(n.li,{children:"[Models] When loading an MLflow Model, print a warning if a mismatch is detected between the current environment and the Model's dependencies (#5368, @WeichenXu123)"}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Support computing custom scalar metrics during model evaluation with ",(0,i.jsx)(n.code,{children:"mlflow.evaluate()"})," (#5389, @MarkYHZhang)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Scoring] Add support for deploying and evaluating SageMaker models via the ",(0,i.jsx)(n.code,{children:"MLflow Deployments API <https://mlflow.org/docs/latest/models.html#deployment-to-custom-targets>"}),"_ (#4971, #5396, @jamestran201)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Bug fixes and documentation updates:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[Tracking / UI] Fix artifact listing and download failures that occurred when operating the MLflow server in ",(0,i.jsx)(n.code,{children:"--serve-artifacts"})," mode (#5409, @dbczumar)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Tracking] Support environment-variable-based authentication when making artifact requests to the MLflow server in ",(0,i.jsx)(n.code,{children:"--serve-artifacts"})," mode (#5370, @TimNooren)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Tracking] Fix bugs in hostname and path resolution when making artifacts requests to the MLflow server in ",(0,i.jsx)(n.code,{children:"--serve-artifacts"})," mode (#5384, #5385, @mert-kirpici)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Tracking] Fix an import error that occurred when ",(0,i.jsx)(n.code,{children:"mlflow.log_figure()"})," was used without ",(0,i.jsx)(n.code,{children:"matplotlib.figure"})," imported (#5406, @WeichenXu123)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Tracking] Correctly log XGBoost metrics containing the ",(0,i.jsx)(n.code,{children:"@"})," symbol during autologging (#5403, @maxfriedrich)"]}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Fix a SQL Server database error that occurred during Runs search (#5382, @dianacarvalho1)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] When downloading artifacts from HDFS, store them in the user-specified destination directory (#5210, @DimaClaudiu)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking / Model Registry] Improve performance of large artifact and model downloads (#5359, @mehtayogita)"}),"\n",(0,i.jsx)(n.li,{children:"[Models] Fix fast.ai PyFunc inference behavior for models with 2D outputs (#5411, @santiagxf)"}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Record Spark model information to the active run when ",(0,i.jsx)(n.code,{children:"mlflow.spark.log_model()"})," is called (#5355, @szczeles)"]}),"\n",(0,i.jsxs)(n.li,{children:["[Models] Restore onnxruntime execution providers when loading ONNX models with ",(0,i.jsx)(n.code,{children:"mlflow.pyfunc.load_model()"})," (#5317, @ecm200)"]}),"\n",(0,i.jsx)(n.li,{children:"[Projects] Increase Docker image push timeout when using Projects with Docker (#5363, @zanitete)"}),"\n",(0,i.jsx)(n.li,{children:"[Python] Fix a bug that prevented users from enabling DEBUG-level Python log outputs (#5362, @dbczumar)"}),"\n",(0,i.jsxs)(n.li,{children:["[Docs] Add a developer guide explaining how to build custom plugins for ",(0,i.jsx)(n.code,{children:"mlflow.evaluate()"})," (#5333, @WeichenXu123)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,i.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.24.0",children:"release change log"}),", and check out the latest documentation on ",(0,i.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var i=t(7294);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);