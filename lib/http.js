// 通过 axios 获取结果

const axios = require('axios')

axios.interceptors.response.use(res => {
    return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
    return axios.get('https://api.github.com/orgs/zfs-frontend-cli/repos')
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
    return axios.get(`https://api.github.com/repos/zfs-frontend-cli/${repo}/tags`)
}

module.exports = {
    getRepoList,
    getTagList
}