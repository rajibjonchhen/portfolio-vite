import * as fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';

import educationData from './data/educationData';
import experienceData from './data/experienceData';
import interestsData from './data/interestData';
import languagesData from './data/languagesData';
import myInfoData from './data/myInfoData';
import { interpersonalSkillsData } from './data/skillsData';
import trainingsData from './data/trainingsData';

const getLogo = (name) => {
    const path = `./src/img/logo/${name}.svg`;
    return fs.readFileSync(path)
}

const getAvatar = (name) => `./src/img/avatars/${name}.png`

export default defineConfig({
    base: process.env.NODE_ENV === "production"? "":"/",
    publicDir:'public',
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html'),
          style:resolve(__dirname, 'style.css')
        },
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
                            linkedin: 'https://www.linkedin.com/in/rita-vaidya',
                        },
                        myInfo:myInfoData(),
                        educations: educationData(),
                        experiences: experienceData(),
                        trainingsData:trainingsData(),
                        othersInfo:[
                            {title:"Interest",
                            data:interestsData()},
                            {title:"Languages",
                            data:languagesData()},
                            {title:"Skills",
                            data:interpersonalSkillsData()},
                        ]
                    },
                }
            },
            ],

        }),
        viteCompression(),
    ],
 })

