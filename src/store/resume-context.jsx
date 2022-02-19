import { createContext, useState, useEffect } from "react";

const ResumeContext = createContext({
      "link": {
        "Linkedin": "https://www.linkedin.com/in/chungyi-liao/",
        "Facebook": "https://www.facebook.com/chungyi.liao/",
        "Github": "https://github.com/liaochungyid",
        "Medium": "https://medium.com/@chungyiliao_29727",
        "Learning": "https://medium.com/@chungyiliao_29727/%E5%BE%9E%E7%97%9E%E5%AE%A2%E9%82%A6%E8%BD%89%E7%A7%BB%E5%88%B0medium-b35ebe603dea?p=b35ebe603dea"
      },
      "education": [
        {
          "place": "Cranfield University",
          "year": "Oct. 2018 - Aug. 2019",
          "position": "Pre-master in Engineering",
          "description": "因疫情，未完成碩士學位",
          "order": 3,
          "extend": false
        },
        {
          "place": "海軍軍官學校",
          "year": "Sep. 2009 - Jun. 2013",
          "position": "應用科學",
          "description": "同級第一名畢業",
          "order": 1,
          "extend": false
        }
      ],
      "skill": {
        "main": ["HTML/CSS", "JavaScript", "TypeScript", "Node.js", "Git", "MySQL", "MongoDB", "GraphQL", "docker"],
        "framework": ["Express", "React"],
        "other": ["RESTful Api", "MVC", "Oauth", "ES6"]
      },
      "project": [
        {
          "name": "Demo on GCP",
          "intro": "使用 GCP 展示 Kubernetes 與 cloud SQL 功能",
          "features": [
            "使用 Kubenetes Engine (LoadBalancer)", 
            "使用 GCP Cloud SQL proxy (sidecar pattern)",
            "使用 GCP Cloud SQL",
            "使用 Docker Container"
          ],
          "links": [
            {
              "Git": "https://github.com/liaochungyid/demo-gcp"
            }
          ]
        },
        {
          "name": "Simple Twitter",
          "intro": "使用 Node.js、express framework、MySQL、Socket.IO 等展示簡易的 Twitter 功能",
          "features": [
            "MySQL 資料庫規劃建立", 
            "資料庫 CRUD 操作及進階關聯",
            "RESTful 路由及 API 設計",
            "MVC 架構"
          ],
          "links": [
            {
              "Git": "https://github.com/liaochungyid/twitter-fullstack-2020",
              "Live Demo": "https://simple-twitter-acj.herokuapp.com/signin",
              "Blog": "https://medium.com/@chungyiliao_29727/%E7%AC%AC%E4%B8%80%E5%80%8B%E5%8D%94%E4%BD%9C%E5%B0%88%E6%A1%88-%E5%AF%86%E9%9B%86%E9%96%8B%E7%99%BC%E7%9A%84%E5%8D%94%E4%BD%9C-baa7061c6ccd"
            }
          ]
        },
        {
          "name": "One Hundred Peaks - Taiwan",
          "intro": "Node.js 原生語言開發(無後端套件)，展示 RESTful API 後端功能，XMLHttpsRequest 方式展示前後 API 串接",
          "features": [
            "file system 模擬資料庫 CRUD", 
            "file system 及 string.replace 模擬模板",
            "crypto hash function 模擬登入 session"
          ],
          "links": [
            {
              "Git": "https://github.com/liaochungyid/oneHundredPeaks-taiwan",
              "Live Demo": "https://tranquil-lake-73390.herokuapp.com/"
            }
          ]
        },
        {
          "name": "Restaurant Forum",
          "intro": "",
          "features": [
            "JWT認證機制", 
            "express 後端框架",
            "admin權限 email:root@example.com password:12345678",
            "user權限 email:user1@example.com password: 12345678"
          ],
          "links": [
            {
              "Live Demo": "https://forum-express-mysql.herokuapp.com/restaurants"
            }
          ]
        },
        {
          "name": "家庭記帳本",
          "intro": "",
          "features": [
            "Passport.js Local登入認證機制", 
            "Passport.js Facebook第三方認證登入機制",
            "NoSQL MongoDB 資料庫操作"
          ],
          "links": [
            {
              "Live Demo": "https://expense-tracker-liaochungyi.herokuapp.com/users/login"
            }
          ]
        }
      ],
      "experience": {
        "irrelevant": [
          {
            "place": "中華民國海軍",
            "year": "Jul. 2013 - Aug. 2018",
            "position": "海軍輪機軍官",
            "description": "曾赴美接艦，期間負責輪機料配件採購與專案進度推進",
            "order": 2,
            "extend": "ExperienceExtend"
          },
          {
            "place": "大乃綠循環科技",
            "year": "Dec. 2019 - Feb. 2021",
            "position": "專案經理",
            "description": "擔任廠務規劃、環保能源計畫送審經理，組織團隊於6個月內完成環保判定，並取得再生能源設施設置許可證",
            "order": 4,
            "extend": false
          },
          {
            "place": "華志營造",
            "year": "Mar. 2021 - Nov. 2021",
            "position": "現場工程師",
            "description": "擔任廠務規劃、環保能源計畫送審經理，組織團隊於6個月內完成環保判定，並取得再生能源設施設置許可證",
            "order": 5,
            "extend": false
          }
        ],
        "related": [
          {
            "place": "ALPHA Camp 線上學習",
            "year": "Mar. 2021 - Dec. 2021",
            "position": "Fullstack Developer (Backend Specialization)",
            "description": "運用下班時間自主學習",
            "order": 6,
            "extend": "LearningExtend"
          }
        ]
      }
    })

// export function ResumeContextProvider(props) {
//   // const [context, setContext] = useState(null)

//   // useEffect(() => {
//     // fetch('https://github.com/liaochungyid/self/blob/main/src/store/resume.json', {
//     //   method: 'GET',
//     //   headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://localhost:3000'}
//     // })
//     // .then(response => console.log(response))
//     // .then(data => {
//     //   setContext(data)
//     // })
//   // }, [])

//   return (
//     <ResumeContext.Provider value={ResumeContext.Consumer}>
//       {props.children}
//     </ResumeContext.Provider>
//   )
// }

export default ResumeContext