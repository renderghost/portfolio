// src/scripts/convertCsvToJson.ts

import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'csv-parse/sync';
import type { Article, CaseStudy, Company, ContentData, Job, ProjectType, Skill } from '../types/content';

// Define interfaces for raw CSV data
interface RawCSVRow {
  [key: string]: string;
}

// Helper function to parse CSV file
function parseCsvFile(filePath: string): RawCSVRow[] {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
}

// Convert Companies CSV
function convertCompanies(data: RawCSVRow[]): Company[] {
  return data.map((row) => ({
    name: row.Name,
    slug: row.Slug,
    collectionId: row['Collection ID'],
    itemId: row['Item ID'],
    createdOn: row['Created On'],
    updatedOn: row['Updated On'],
    publishedOn: row['Published On'],
    website: row.Website,
    type: row.Type as Company['type'],
    industry: row.Industry,
    city: row.City,
    country: row.Country,
    logo: row.Logo,
  }));
}

// Convert Skills CSV
function convertSkills(data: RawCSVRow[]): Skill[] {
  return data.map((row) => ({
    name: row.Skill,
    slug: row.Slug,
    collectionId: row['Collection ID'],
    itemId: row['Item ID'],
    createdOn: row['Created On'],
    updatedOn: row['Updated On'],
    publishedOn: row['Published On'],
  }));
}

// Convert Portfolio/Case Studies CSV
function convertCaseStudies(data: RawCSVRow[]): CaseStudy[] {
  return data.map((row) => ({
    name: row['Case Study Name'],
    slug: row.Slug,
    collectionId: row['Collection ID'],
    itemId: row['Item ID'],
    createdOn: row['Created On'],
    updatedOn: row['Updated On'],
    publishedOn: row['Published On'],
    summary: row.Summary,
    body: row.Body,
    pitchEmbed: row['Pitch Embed'],
    coverImage: row['Cover Image'],
    type: row.Type as ProjectType,
    endDate: row['End Date'],
    role: row.Role,
    company: row.Company,
    relevantSkills: row['Relevant Skills']?.split(';').map((s: string) => s.trim()) || [],
  }));
}

// Convert Jobs CSV
function convertJobs(data: RawCSVRow[]): Job[] {
  return data.map((row) => ({
    jobTitle: row['Job title'],
    slug: row.Slug,
    collectionId: row['Collection ID'],
    itemId: row['Item ID'],
    createdOn: row['Created On'],
    updatedOn: row['Updated On'],
    publishedOn: row['Published On'],
    cover: row.cover,
    jobDescription: row['Job description'],
    userNeed: row['User need'],
    startDate: row['Start date'],
    endDate: row['End date'],
    employmentType: row['Employment type'] as Job['employmentType'],
    company: row.Company,
    skills: row.Skills?.split(';').map((s: string) => s.trim()) || [],
    caseStudies: row['Case Studies']?.split(';').map((s: string) => s.trim()) || [],
    client: row.Client,
  }));
}

// Convert Articles CSV
function convertArticles(data: RawCSVRow[]): Article[] {
  return data.map((row) => ({
    title: row.Title,
    slug: row.Slug,
    collectionId: row['Collection ID'],
    itemId: row['Item ID'],
    createdOn: row['Created On'],
    updatedOn: row['Updated On'],
    publishedOn: row['Published On'],
    subtitle: row.Subtitle,
    featured: row.Featured === 'true',
    coverImage: row.Cover,
    articleUrl: row['Article URL'],
    published: row.Published,
    publication: row.Publication,
    publicationUrl: row['Publication URL'],
  }));
}

// Main conversion function
async function convertCsvToJson(): Promise<void> {
  const inputDir = path.join(process.cwd(), 'src', 'data', 'csv');
  const outputDir = path.join(process.cwd(), 'src', 'data', 'json');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read and convert all CSV files
  const companies = convertCompanies(parseCsvFile(path.join(inputDir, 'Barry Prendergast - Companies.csv')));
  const skills = convertSkills(parseCsvFile(path.join(inputDir, 'Barry Prendergast - Skills.csv')));
  const caseStudies = convertCaseStudies(parseCsvFile(path.join(inputDir, 'Barry Prendergast - Portfolio.csv')));
  const jobs = convertJobs(parseCsvFile(path.join(inputDir, 'Barry Prendergast - Jobs.csv')));
  const articles = convertArticles(parseCsvFile(path.join(inputDir, 'Barry Prendergast - Articles.csv')));

  // Create combined content data
  const contentData: ContentData = {
    companies,
    skills,
    caseStudies,
    jobs,
    articles,
  };

  // Write individual JSON files
  fs.writeFileSync(path.join(outputDir, 'companies.json'), JSON.stringify(companies, null, 2));
  fs.writeFileSync(path.join(outputDir, 'skills.json'), JSON.stringify(skills, null, 2));
  fs.writeFileSync(path.join(outputDir, 'case-studies.json'), JSON.stringify(caseStudies, null, 2));
  fs.writeFileSync(path.join(outputDir, 'jobs.json'), JSON.stringify(jobs, null, 2));
  fs.writeFileSync(path.join(outputDir, 'articles.json'), JSON.stringify(articles, null, 2));

  // Write combined content data
  fs.writeFileSync(path.join(outputDir, 'content.json'), JSON.stringify(contentData, null, 2));
}

// Run the conversion
convertCsvToJson().catch(console.error);
