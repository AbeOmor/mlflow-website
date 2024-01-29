"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6911],{2862:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var r=i(5893),s=i(1151);const l={title:"MLflow 1.30.0",slug:"1.30.0",authors:["mlflow-maintainers"]},o=void 0,t={permalink:"/mlflow-website/releases/1.30.0",source:"@site/releases/2022-10-19-1.30.0-release.md",title:"MLflow 1.30.0",description:"We are happy to announce the availability of MLflow 1.30.0!",date:"2022-10-19T00:00:00.000Z",formattedDate:"October 19, 2022",tags:[],readingTime:2.725,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.30.0",slug:"1.30.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.0.1",permalink:"/mlflow-website/releases/2.0.1"},nextItem:{title:"MLflow 1.29.0",permalink:"/mlflow-website/releases/1.29.0"}},a={authorsImageUrls:[void 0]},d=[];function c(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["We are happy to announce the availability of ",(0,r.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.30.0",children:"MLflow 1.30.0"}),"!"]}),"\n",(0,r.jsx)(n.p,{children:"MLflow 1.30.0 includes several major features and improvements"}),"\n",(0,r.jsx)(n.p,{children:"Features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[Pipelines] Introduce hyperparameter tuning support to MLflow Pipelines (#6859, @prithvikannan)"}),"\n",(0,r.jsx)(n.li,{children:"[Pipelines] Introduce support for prediction outlier comparison to training data set (#6991, @jinzhang21)"}),"\n",(0,r.jsx)(n.li,{children:"[Pipelines] Introduce support for recording all training parameters for reproducibility (#7026, #7094, @prithvikannan)"}),"\n",(0,r.jsxs)(n.li,{children:["[Pipelines] Add support for ",(0,r.jsx)(n.code,{children:"Delta"})," tables as a datasource in the ingest step (#7010, @sunishsheth2009)"]}),"\n",(0,r.jsx)(n.li,{children:"[Pipelines] Add expanded support for data profiling up to 10,000 columns (#7035, @prithvikanna)"}),"\n",(0,r.jsx)(n.li,{children:"[Pipelines] Add support for AutoML in MLflow Pipelines using FLAML (#6959, @mshtelma)"}),"\n",(0,r.jsx)(n.li,{children:"[Pipelines] Add support for simplified transform step execution by allowing for unspecified configuration (#6909, @apurva-koti)"}),"\n",(0,r.jsx)(n.li,{children:"[Pipelines] Introduce a data preview tab to the transform step card (#7033, @prithvikannan)"}),"\n",(0,r.jsxs)(n.li,{children:["[Tracking] Introduce ",(0,r.jsx)(n.code,{children:"run_name"})," attribute for ",(0,r.jsx)(n.code,{children:"create_run"}),", ",(0,r.jsx)(n.code,{children:"get_run"})," and ",(0,r.jsx)(n.code,{children:"update_run"})," APIs (#6782, #6798 @apurva-koti)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Tracking] Add support for searching by ",(0,r.jsx)(n.code,{children:"creation_time"})," and ",(0,r.jsx)(n.code,{children:"last_update_time"})," for the ",(0,r.jsx)(n.code,{children:"search_experiments"})," API (#6979, @harupy)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Tracking] Add support for search terms ",(0,r.jsx)(n.code,{children:"run_id IN"})," and ",(0,r.jsx)(n.code,{children:"run ID NOT IN"})," for the ",(0,r.jsx)(n.code,{children:"search_runs"})," API (#6945, @harupy)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Tracking] Add support for searching by ",(0,r.jsx)(n.code,{children:"user_id"})," and ",(0,r.jsx)(n.code,{children:"end_time"})," for the ",(0,r.jsx)(n.code,{children:"search_runs"})," API (#6881, #6880 @subramaniam02)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Tracking] Add support for searching by ",(0,r.jsx)(n.code,{children:"run_name"})," and ",(0,r.jsx)(n.code,{children:"run_id"})," for the ",(0,r.jsx)(n.code,{children:"search_runs"})," API (#6899, @harupy; #6952, @alexacole)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Tracking] Add support for synchronizing run ",(0,r.jsx)(n.code,{children:"name"})," attribute and ",(0,r.jsx)(n.code,{children:"mlflow.runName"})," tag (#6971, @BenWilson2)"]}),"\n",(0,r.jsx)(n.li,{children:"[Tracking] Add support for signed tracking server requests using AWSSigv4 and AWS IAM (#7044, @pdifranc)"}),"\n",(0,r.jsxs)(n.li,{children:["[Tracking] Introduce the ",(0,r.jsx)(n.code,{children:"update_run()"})," API for modifying the ",(0,r.jsx)(n.code,{children:"status"})," and ",(0,r.jsx)(n.code,{children:"name"})," attributes of existing runs (#7013, @gabrielfu)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Tracking] Add support for experiment deletion in the ",(0,r.jsx)(n.code,{children:"mlflow gc"})," cli API (#6977, @shaikmoeed)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Models] Add support for environment restoration in the ",(0,r.jsx)(n.code,{children:"evaluate()"})," API (#6728, @jerrylian-db)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Models] Remove restrictions on binary classification labels in the ",(0,r.jsx)(n.code,{children:"evaluate()"})," API (#7077, @dbczumar)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Scoring] Add support for ",(0,r.jsx)(n.code,{children:"BooleanType"})," to ",(0,r.jsx)(n.code,{children:"mlflow.pyfunc.spark_udf()"})," (#6913, @BenWilson2)"]}),"\n",(0,r.jsxs)(n.li,{children:["[SQLAlchemy] Add support for configurable ",(0,r.jsx)(n.code,{children:"Pool"})," class options for ",(0,r.jsx)(n.code,{children:"SqlAlchemyStore"})," (#6883, @mingyu89)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[Pipelines] Enable Pipeline subprocess commands to create a new ",(0,r.jsx)(n.code,{children:"SparkSession"})," if one does not exist (#6846, @prithvikannan)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Pipelines] Fix a rendering issue with ",(0,r.jsx)(n.code,{children:"bool"})," column types in Step Card data profiles (#6907, @sunishsheth2009)"]}),"\n",(0,r.jsx)(n.li,{children:"[Pipelines] Add validation and an exception if required step files are missing (#7067, @mingyu89)"}),"\n",(0,r.jsx)(n.li,{children:"[Pipelines] Change step configuration validation to only be performed during runtime execution of a step (#6967, @prithvikannan)"}),"\n",(0,r.jsxs)(n.li,{children:["[Tracking] Fix infinite recursion bug when inferring the model schema in ",(0,r.jsx)(n.code,{children:"mlflow.pyspark.ml.autolog()"})," (#6831, @harupy)"]}),"\n",(0,r.jsx)(n.li,{children:"[UI] Remove the browser error notification when failing to fetch artifacts (#7001, @kevingreer)"}),"\n",(0,r.jsxs)(n.li,{children:["[Models] Allow ",(0,r.jsx)(n.code,{children:"mlflow-skinny"})," package to serve as base requirement in ",(0,r.jsx)(n.code,{children:"MLmodel"})," requirements (#6974, @BenWilson2)"]}),"\n",(0,r.jsx)(n.li,{children:"[Models] Fix an issue with code path resolution for loading SparkML models (#6968, @dbczumar)"}),"\n",(0,r.jsx)(n.li,{children:"[Models] Fix an issue with dependency inference in logging SparkML models (#6912, @BenWilson2)"}),"\n",(0,r.jsx)(n.li,{children:"[Models] Fix an issue involving potential duplicate downloads for SparkML models (#6903, @serena-ruan)"}),"\n",(0,r.jsxs)(n.li,{children:["[Models] Add missing ",(0,r.jsx)(n.code,{children:"pos_label"})," to ",(0,r.jsx)(n.code,{children:"sklearn.metrics.precision_recall_curve"})," in ",(0,r.jsx)(n.code,{children:"mlflow.evaluate()"})," (#6854, @dbczumar)"]}),"\n",(0,r.jsxs)(n.li,{children:["[SQLAlchemy] Fix a bug in ",(0,r.jsx)(n.code,{children:"SqlAlchemyStore"})," where ",(0,r.jsx)(n.code,{children:"set_tag()"})," updates the incorrect tags (#7027, @gabrielfu)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Documentation updates:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[Models] Update details regarding the default ",(0,r.jsx)(n.code,{children:"Keras"})," serialization format (#7022, @balvisio)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,r.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.30.0",children:"release change log"}),", and check out the latest documentation on ",(0,r.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>o});var r=i(7294);const s={},l=r.createContext(s);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);