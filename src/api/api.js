import axiosInstance from "@/api/axios";

/**
 * 获取所有文章
 */
export const listAllArticles = () => {
    return axiosInstance({
        method: 'GET',
        url: 'admin/article/list',
    })
}

export const getArticle = (id) => {
    return axiosInstance({
        method: 'GET',
        url: `admin/article/${id}`,
    })
}
