import * as fs from 'fs'
import  { resolve } from 'path'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteCompression from 'vite-plugin-compression'
import educationData from './data/educationData'
import experienceData from './data/experienceData'
import { interpersonalSkillsData, itSkillsData } from './data/skillsData'
import myInfoData from './data/myInfoData'
import interestsData from './data/interestData'
import projectsData from './data/projectsData'
import trainingsData from './data/trainingsData'
import languagesData from './data/languagesData'

const getLogo = (name) => {
    const path = `./src/img/logo/${name}.svg`;
    return fs.readFileSync(path)
}

const getAvatar = (name) => `./src/img/avatars/${name}.png`

export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html'),
        }
      }
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages:[{
                entry: 'index.html',
                filename: 'index.html',
                template: 'index.html',
                injectOptions: {
                    data: {
                        head: {
                            title: 'Rita Vaidya',
                            meta: {
                                description: "Rita Vaidya's Porfolio",
                                keywords: 'codex software, software development',
                                author: 'Rajib Jonchhen',
                            }
                        },
                        links: {
                            email: 'mailto:hkrs.vaidya@gmail.com',
                            linkedin: 'https://www.linkedin.com/company/rita-vaidya',
                        },
                        myInfo:myInfoData(),
                        educations: educationData(),
                        experiences: experienceData(),
                        skills:[{it:itSkillsData(), interpersonal:interpersonalSkillsData()}],
                        interests:interestsData(),
                        projects:projectsData(),
                        trainingsData:trainingsData(),
                        languages:languagesData()
                    },
                }
            },
            ],

        }),
        viteCompression(),
    ],
 })

