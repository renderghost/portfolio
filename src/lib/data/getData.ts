import { promises as fs } from 'fs'
import path from 'path'
import type { Article, CaseStudy, Company, ContentData, Job, Skill } from '@/types/content'

const dataDirectory = path.join(process.cwd(), 'src', 'lib', 'data', 'json')

export async function getContent(): Promise<ContentData> {
    const filePath = path.join(dataDirectory, 'content.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    return JSON.parse(jsonData)
}

export async function getArticles(): Promise<Article[]> {
    const filePath = path.join(dataDirectory, 'articles.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    return JSON.parse(jsonData)
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
    const filePath = path.join(dataDirectory, 'casestudies.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    return JSON.parse(jsonData)
}

export async function getCompanies(): Promise<Company[]> {
    const filePath = path.join(dataDirectory, 'companies.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    return JSON.parse(jsonData)
}

export async function getJobs(): Promise<Job[]> {
    const filePath = path.join(dataDirectory, 'jobs.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    return JSON.parse(jsonData)
}

export async function getSkills(): Promise<Skill[]> {
    const filePath = path.join(dataDirectory, 'skills.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    return JSON.parse(jsonData)
}

// Helper function to get a single item by slug
export async function getItemBySlug<T extends { slug: string }>(
    items: T[],
    slug: string
): Promise<T | undefined> {
    return items.find((item) => item.slug === slug)
}

// Helper function to get featured articles
export async function getFeaturedArticles(): Promise<Article[]> {
    const articles = await getArticles()
    return articles.filter((article) => article.featured)
}

// Helper function to get latest case studies
export async function getLatestCaseStudies(limit: number = 3): Promise<CaseStudy[]> {
    const caseStudies = await getCaseStudies()
    return caseStudies
        .sort((a, b) => new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime())
        .slice(0, limit)
}

