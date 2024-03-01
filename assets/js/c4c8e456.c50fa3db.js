"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6911],{8178:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>h,toc:()=>c});var n=i(5893),r=i(1151);const t={title:"MLflow 1.30.0",slug:"1.30.0",authors:["mlflow-maintainers"]},s=void 0,h={permalink:"/mlflow-website/releases/1.30.0",source:"@site/releases/2022-10-19-1.30.0-release.md",title:"MLflow 1.30.0",description:"We are happy to announce the availability of MLflow 1.30.0!",date:"2022-10-19T00:00:00.000Z",formattedDate:"October 19, 2022",tags:[],readingTime:2.725,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.30.0",slug:"1.30.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.0.1",permalink:"/mlflow-website/releases/2.0.1"},nextItem:{title:"MLflow 1.29.0",permalink:"/mlflow-website/releases/1.29.0"}},o={authorsImageUrls:[void 0]},c=[];function a(e){const l={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.p,{children:["We are happy to announce the availability of ",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.30.0",children:"MLflow 1.30.0"}),"!"]}),"\n",(0,n.jsx)(l.p,{children:"MLflow 1.30.0 includes several major features and improvements"}),"\n",(0,n.jsx)(l.p,{children:"Features:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Introduce hyperparameter tuning support to MLflow Pipelines (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6859",children:"#6859"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/prithvikannan",children:"@prithvikannan"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Introduce support for prediction outlier comparison to training data set (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6991",children:"#6991"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/jinzhang21",children:"@jinzhang21"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Introduce support for recording all training parameters for reproducibility (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7026",children:"#7026"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7094",children:"#7094"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/prithvikannan",children:"@prithvikannan"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Add support for ",(0,n.jsx)(l.code,{children:"Delta"})," tables as a datasource in the ingest step (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7010",children:"#7010"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Add expanded support for data profiling up to 10,000 columns (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7035",children:"#7035"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/prithvikanna",children:"@prithvikanna"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Add support for AutoML in MLflow Pipelines using FLAML (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6959",children:"#6959"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/mshtelma",children:"@mshtelma"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Add support for simplified transform step execution by allowing for unspecified configuration (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6909",children:"#6909"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/apurva-koti",children:"@apurva-koti"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Introduce a data preview tab to the transform step card (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7033",children:"#7033"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/prithvikannan",children:"@prithvikannan"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Introduce ",(0,n.jsx)(l.code,{children:"run_name"})," attribute for ",(0,n.jsx)(l.code,{children:"create_run"}),", ",(0,n.jsx)(l.code,{children:"get_run"})," and ",(0,n.jsx)(l.code,{children:"update_run"})," APIs (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6782",children:"#6782"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6798",children:"#6798"})," ",(0,n.jsx)(l.a,{href:"https://github.com/apurva-koti",children:"@apurva-koti"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Add support for searching by ",(0,n.jsx)(l.code,{children:"creation_time"})," and ",(0,n.jsx)(l.code,{children:"last_update_time"})," for the ",(0,n.jsx)(l.code,{children:"search_experiments"})," API (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6979",children:"#6979"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Add support for search terms ",(0,n.jsx)(l.code,{children:"run_id IN"})," and ",(0,n.jsx)(l.code,{children:"run ID NOT IN"})," for the ",(0,n.jsx)(l.code,{children:"search_runs"})," API (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6945",children:"#6945"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Add support for searching by ",(0,n.jsx)(l.code,{children:"user_id"})," and ",(0,n.jsx)(l.code,{children:"end_time"})," for the ",(0,n.jsx)(l.code,{children:"search_runs"})," API (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6881",children:"#6881"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6880",children:"#6880"})," ",(0,n.jsx)(l.a,{href:"https://github.com/subramaniam02",children:"@subramaniam02"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Add support for searching by ",(0,n.jsx)(l.code,{children:"run_name"})," and ",(0,n.jsx)(l.code,{children:"run_id"})," for the ",(0,n.jsx)(l.code,{children:"search_runs"})," API (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6899",children:"#6899"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),"; ",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6952",children:"#6952"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/alexacole",children:"@alexacole"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Add support for synchronizing run ",(0,n.jsx)(l.code,{children:"name"})," attribute and ",(0,n.jsx)(l.code,{children:"mlflow.runName"})," tag (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6971",children:"#6971"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Add support for signed tracking server requests using AWSSigv4 and AWS IAM (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7044",children:"#7044"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/pdifranc",children:"@pdifranc"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Introduce the ",(0,n.jsx)(l.code,{children:"update_run()"})," API for modifying the ",(0,n.jsx)(l.code,{children:"status"})," and ",(0,n.jsx)(l.code,{children:"name"})," attributes of existing runs (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7013",children:"#7013"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/gabrielfu",children:"@gabrielfu"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Add support for experiment deletion in the ",(0,n.jsx)(l.code,{children:"mlflow gc"})," cli API (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6977",children:"#6977"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/shaikmoeed",children:"@shaikmoeed"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Models] Add support for environment restoration in the ",(0,n.jsx)(l.code,{children:"evaluate()"})," API (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6728",children:"#6728"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/jerrylian-db",children:"@jerrylian-db"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Models] Remove restrictions on binary classification labels in the ",(0,n.jsx)(l.code,{children:"evaluate()"})," API (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7077",children:"#7077"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Scoring] Add support for ",(0,n.jsx)(l.code,{children:"BooleanType"})," to ",(0,n.jsx)(l.code,{children:"mlflow.pyfunc.spark_udf()"})," (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6913",children:"#6913"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[SQLAlchemy] Add support for configurable ",(0,n.jsx)(l.code,{children:"Pool"})," class options for ",(0,n.jsx)(l.code,{children:"SqlAlchemyStore"})," (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6883",children:"#6883"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/mingyu89",children:"@mingyu89"}),")"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"Bug fixes:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Enable Pipeline subprocess commands to create a new ",(0,n.jsx)(l.code,{children:"SparkSession"})," if one does not exist (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6846",children:"#6846"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/prithvikannan",children:"@prithvikannan"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Fix a rendering issue with ",(0,n.jsx)(l.code,{children:"bool"})," column types in Step Card data profiles (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6907",children:"#6907"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Add validation and an exception if required step files are missing (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7067",children:"#7067"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/mingyu89",children:"@mingyu89"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Pipelines] Change step configuration validation to only be performed during runtime execution of a step (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6967",children:"#6967"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/prithvikannan",children:"@prithvikannan"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Tracking] Fix infinite recursion bug when inferring the model schema in ",(0,n.jsx)(l.code,{children:"mlflow.pyspark.ml.autolog()"})," (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6831",children:"#6831"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[UI] Remove the browser error notification when failing to fetch artifacts (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7001",children:"#7001"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/kevingreer",children:"@kevingreer"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Models] Allow ",(0,n.jsx)(l.code,{children:"mlflow-skinny"})," package to serve as base requirement in ",(0,n.jsx)(l.code,{children:"MLmodel"})," requirements (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6974",children:"#6974"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Models] Fix an issue with code path resolution for loading SparkML models (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6968",children:"#6968"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Models] Fix an issue with dependency inference in logging SparkML models (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6912",children:"#6912"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Models] Fix an issue involving potential duplicate downloads for SparkML models (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6903",children:"#6903"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/serena-ruan",children:"@serena-ruan"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[Models] Add missing ",(0,n.jsx)(l.code,{children:"pos_label"})," to ",(0,n.jsx)(l.code,{children:"sklearn.metrics.precision_recall_curve"})," in ",(0,n.jsx)(l.code,{children:"mlflow.evaluate()"})," (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6854",children:"#6854"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,n.jsxs)(l.li,{children:["[SQLAlchemy] Fix a bug in ",(0,n.jsx)(l.code,{children:"SqlAlchemyStore"})," where ",(0,n.jsx)(l.code,{children:"set_tag()"})," updates the incorrect tags (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7027",children:"#7027"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/gabrielfu",children:"@gabrielfu"}),")"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"Documentation updates:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["[Models] Update details regarding the default ",(0,n.jsx)(l.code,{children:"Keras"})," serialization format (",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/7022",children:"#7022"}),", ",(0,n.jsx)(l.a,{href:"https://github.com/balvisio",children:"@balvisio"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(l.p,{children:["For a comprehensive list of changes, see the ",(0,n.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.30.0",children:"release change log"}),", and check out the latest documentation on ",(0,n.jsx)(l.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function d(e={}){const{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,l,i)=>{i.d(l,{Z:()=>h,a:()=>s});var n=i(7294);const r={},t=n.createContext(r);function s(e){const l=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function h(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(t.Provider,{value:l},e.children)}}}]);