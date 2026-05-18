"use client"

import { useRef, useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'

const ALL_BADGES = [
  { id: 'c489cc54-09d0-4619-91ea-863dd452ca85', name: 'Develop and Secure APIs with Apigee X Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/d344fbbb-44df-4af6-b5c0-ae59588b9ebc/image.png', badgeUrl: 'https://www.credly.com/badges/c489cc54-09d0-4619-91ea-863dd452ca85' },
  { id: '9285e364-56dd-4d3c-b631-5e4310d7fc5e', name: 'Use Machine Learning APIs on Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/1d95accd-3e3d-466f-a432-5dceb4998fd1/image.png', badgeUrl: 'https://www.credly.com/badges/9285e364-56dd-4d3c-b631-5e4310d7fc5e' },
  { id: '4f1e5ee6-e54c-47b5-93b5-491c97b49727', name: 'AWS re/Start Graduate', issuer: 'AWS', imageUrl: 'https://images.credly.com/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png', badgeUrl: 'https://www.credly.com/badges/4f1e5ee6-e54c-47b5-93b5-491c97b49727' },
  { id: '9b6dd62f-0d7e-43fd-aeff-bc01d27d44af', name: 'Career Management Essentials', issuer: 'IBM SkillsBuild', imageUrl: 'https://images.credly.com/images/b37c7936-153c-430c-b34f-a288fd2c5329/BadgeEmblem_CareerManagementEssentials.png', badgeUrl: 'https://www.credly.com/badges/9b6dd62f-0d7e-43fd-aeff-bc01d27d44af' },
  { id: '959e01af-ed05-42a8-9c42-b67c3fe42cda', name: 'Classify Images with TensorFlow on Google Cloud', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/ba7d317c-0441-493d-9297-840162892581/image.png', badgeUrl: 'https://www.credly.com/badges/959e01af-ed05-42a8-9c42-b67c3fe42cda' },
  { id: '7f5272b5-dbe2-42c8-ba41-7360f761dcf6', name: 'Develop Serverless Applications on Cloud Run Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/71b9b0df-64f1-4c0a-867f-942e2a5a5a14/image.png', badgeUrl: 'https://www.credly.com/badges/7f5272b5-dbe2-42c8-ba41-7360f761dcf6' },
  { id: '82a81e51-b354-4b28-9c43-192d937962db', name: 'Build Google Cloud Infrastructure for AWS Professionals Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/7a2bc677-846d-4b0b-85a3-b56e0a0f9452/image.png', badgeUrl: 'https://www.credly.com/badges/82a81e51-b354-4b28-9c43-192d937962db' },
  { id: '28df1084-3fd8-401b-8495-17413b086949', name: 'Connecting Cloud Networks with NCC', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/66d67f84-1c21-4a17-a2d7-44aabc518f49/blob', badgeUrl: 'https://www.credly.com/badges/28df1084-3fd8-401b-8495-17413b086949' },
  { id: '42d395ed-10b9-4d6d-b886-ebe16c564b01', name: 'Prepare Data for Looker Dashboards and Reports', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/4ed71434-c678-46b2-bd1c-93c96d3e7b90/blob', badgeUrl: 'https://www.credly.com/badges/42d395ed-10b9-4d6d-b886-ebe16c564b01' },
  { id: '99cb2a36-b685-4852-8381-670aa520b43f', name: 'Detect Manufacturing Defects using Visual Inspection AI Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/3bdfc329-851b-4153-a5c4-10d8c3a1f18c/image.png', badgeUrl: 'https://www.credly.com/badges/99cb2a36-b685-4852-8381-670aa520b43f' },
  { id: '7101e1a6-3857-4f4c-b80d-617fb33e46ef', name: 'Deploy and Manage Apigee X Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/d2bc98e3-2164-458e-9045-4f857cbc5612/image.png', badgeUrl: 'https://www.credly.com/badges/7101e1a6-3857-4f4c-b80d-617fb33e46ef' },
  { id: '085677ea-446f-4bee-a341-fa42d02167b2', name: 'Implement Multimodal Vector Search with BigQuery', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/6d858d84-6987-48c8-9608-f5abb9b74492/blob', badgeUrl: 'https://www.credly.com/badges/085677ea-446f-4bee-a341-fa42d02167b2' },
  { id: '4fc29a98-903e-44a4-8b17-44ba511530d6', name: 'Migrate MySQL data to Cloud SQL using Database Migration Service Skill', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/ae897453-a42c-4a7e-a147-51b91ff542d3/image.png', badgeUrl: 'https://www.credly.com/badges/4fc29a98-903e-44a4-8b17-44ba511530d6' },
  { id: '037fa22a-09a1-4153-a393-23e0c3d1080b', name: 'Develop with Apps Script and AppSheet Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/c99de4cf-a2fe-4c34-9b38-43ea165ea0f4/image.png', badgeUrl: 'https://www.credly.com/badges/037fa22a-09a1-4153-a393-23e0c3d1080b' },
  { id: '6df9f82e-b44d-4ac9-8c43-ba2ad1b65373', name: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG Sk', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/86a3283f-3e35-494f-82da-3fb3e89ba223/image.png', badgeUrl: 'https://www.credly.com/badges/6df9f82e-b44d-4ac9-8c43-ba2ad1b65373' },
  { id: '83bf1d2d-46f6-4a94-ac7f-a68ad089bd54', name: 'Build and Deploy Machine Learning Solutions on Vertex AI Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/f4c342c9-af98-4352-b54a-a8a166ee8f68/image.png', badgeUrl: 'https://www.credly.com/badges/83bf1d2d-46f6-4a94-ac7f-a68ad089bd54' },
  { id: '75df47aa-e135-4b14-8b6a-c0f9f2ae590f', name: 'Implement Cloud Security Fundamentals on Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/f1dbea96-0ef4-4857-bb85-3d208a82de10/image.png', badgeUrl: 'https://www.credly.com/badges/75df47aa-e135-4b14-8b6a-c0f9f2ae590f' },
  { id: '84098354-9722-4ff9-8326-e54ad8b03ba1', name: 'Build a Data Warehouse with BigQuery Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/8ab21779-042f-4616-a6ab-fd0d62648b24/image.png', badgeUrl: 'https://www.credly.com/badges/84098354-9722-4ff9-8326-e54ad8b03ba1' },
  { id: '7859bfcf-44a9-467b-b5ac-a6b034c8731a', name: 'Protect Cloud Traffic with BeyondCorp Enterprise (BCE) Security Skill ', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/70116ac6-9bf9-4600-b8db-7d0147fb5da8/image.png', badgeUrl: 'https://www.credly.com/badges/7859bfcf-44a9-467b-b5ac-a6b034c8731a' },
  { id: '46103734-2a49-41c3-a3a9-5f5e21b85e77', name: 'Engineer Data for Predictive Modeling with BigQuery ML Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/6160e2c1-4a95-4f47-8c5b-f2dde7bb6a67/image.png', badgeUrl: 'https://www.credly.com/badges/46103734-2a49-41c3-a3a9-5f5e21b85e77' },
  { id: '4764c77f-e716-4fdd-aa4a-7953efa133c9', name: 'Implement DevOps Workflows in Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/7514501c-47e3-4766-a833-2f45eacdf615/image.png', badgeUrl: 'https://www.credly.com/badges/4764c77f-e716-4fdd-aa4a-7953efa133c9' },
  { id: 'a922defc-9b11-4d34-b757-c56c1289e49e', name: 'Analyze and Reason on Multimodal Data with Gemini', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/dab74a06-8898-4043-a682-8d02a6d05044/blob', badgeUrl: 'https://www.credly.com/badges/a922defc-9b11-4d34-b757-c56c1289e49e' },
  { id: 'c818001a-39b5-4585-94ed-9d3abbe80bee', name: 'Mitigate Threats and Vulnerabilities with Security Command Center Skil', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/122ab775-7bbd-4167-a3b5-5dd92b4e02f6/image.png', badgeUrl: 'https://www.credly.com/badges/c818001a-39b5-4585-94ed-9d3abbe80bee' },
  { id: '4f39135d-c836-47c6-8cb0-0a01b0329073', name: 'Monitor Environments with Google Cloud Managed Service for Prometheus ', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/4199c028-1dd7-4802-a4fc-fe043d705b31/blob', badgeUrl: 'https://www.credly.com/badges/4f39135d-c836-47c6-8cb0-0a01b0329073' },
  { id: '820bdf88-db44-4d52-bafe-df559b61f20a', name: 'Automate Data Capture at Scale with Document AI Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/ca5eab27-0890-4eb6-9885-97650b485212/image.png', badgeUrl: 'https://www.credly.com/badges/820bdf88-db44-4d52-bafe-df559b61f20a' },
  { id: '4a4479b5-3ab0-4daa-a3b7-0e073c9a554d', name: 'Secure Software Delivery Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/dd932e71-6255-4c38-b873-7c2f6a44c1f6/blob', badgeUrl: 'https://www.credly.com/badges/4a4479b5-3ab0-4daa-a3b7-0e073c9a554d' },
  { id: 'db545a85-fd70-4616-8ae3-52ea14e729a6', name: 'Share Data Using Google Data Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/b0e1da4e-e1c9-4201-9803-cf3389e1d0f9/image.png', badgeUrl: 'https://www.credly.com/badges/db545a85-fd70-4616-8ae3-52ea14e729a6' },
  { id: '78bf5f74-b5de-4fa3-8660-2a92a4f1bea4', name: 'Analyze Images with the Cloud Vision API Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/bb8edfd1-9d69-48a3-bf81-3ab830caf393/image.png', badgeUrl: 'https://www.credly.com/badges/78bf5f74-b5de-4fa3-8660-2a92a4f1bea4' },
  { id: 'cae10caf-9217-4315-9184-e664e502b45e', name: 'Develop GenAI Apps with Gemini and Streamlit Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/1dbef1bd-cdb0-40e1-bff4-8200448c3161/blob', badgeUrl: 'https://www.credly.com/badges/cae10caf-9217-4315-9184-e664e502b45e' },
  { id: '6779a8a5-9439-4f5f-ac67-21e310b18516', name: 'Implement CI/CD Pipelines on Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/0daf1b0e-28c3-4102-96cf-e9d5f9213cc3/image.png', badgeUrl: 'https://www.credly.com/badges/6779a8a5-9439-4f5f-ac67-21e310b18516' },
  { id: 'c1622384-6b93-41c9-bddc-05060b83004f', name: 'Build a Website on Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/cfcacbf1-1f76-40ad-be09-a5b057e31ebf/image.png', badgeUrl: 'https://www.credly.com/badges/c1622384-6b93-41c9-bddc-05060b83004f' },
  { id: '1d244c38-2d9f-4298-97bd-89913a4a7084', name: 'Prepare Data for ML APIs on Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/68756311-9319-4eeb-a2b7-76defc8dd8a2/image.png', badgeUrl: 'https://www.credly.com/badges/1d244c38-2d9f-4298-97bd-89913a4a7084' },
  { id: '2f492496-128f-4568-abaa-5592183d043a', name: 'Analyze Sentiment with Natural Language API Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/bd687b0c-3959-4e06-b511-6623e32b8fdb/image.png', badgeUrl: 'https://www.credly.com/badges/2f492496-128f-4568-abaa-5592183d043a' },
  { id: '5142dc83-2550-4f60-afb6-f9e6503adf7c', name: 'Build a Data Mesh with Dataplex Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/c4acff27-5baa-452f-a6b2-ab875da12dfd/image.png', badgeUrl: 'https://www.credly.com/badges/5142dc83-2550-4f60-afb6-f9e6503adf7c' },
  { id: 'c3837ffa-379b-4401-a7cb-3e0506c02696', name: 'Create and Manage Cloud SQL for PostgreSQL Instances Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/597dbb03-e744-4abd-b005-74a4675eaab9/image.png', badgeUrl: 'https://www.credly.com/badges/c3837ffa-379b-4401-a7cb-3e0506c02696' },
  { id: 'b15189f8-811a-4b09-8b2f-50214b2d125a', name: 'Create ML Models with BigQuery ML Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/073a27aa-c3d6-44b5-875f-906191666d70/image.png', badgeUrl: 'https://www.credly.com/badges/b15189f8-811a-4b09-8b2f-50214b2d125a' },
  { id: '891fa823-b9df-40a2-8050-f66ea014fdb8', name: 'Discover and Protect Sensitive Data Across Your Ecosystem Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/a380b061-fd3a-4cb4-8835-9efa241a35a5/blob', badgeUrl: 'https://www.credly.com/badges/891fa823-b9df-40a2-8050-f66ea014fdb8' },
  { id: '6ff5bde3-cf0a-489e-89ce-36e8c850f2a8', name: 'Get Started with Eventarc Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/5aa8a83f-22d6-4aa2-9a65-f95290187ce3/image.png', badgeUrl: 'https://www.credly.com/badges/6ff5bde3-cf0a-489e-89ce-36e8c850f2a8' },
  { id: 'c7412690-d71a-4896-b0c1-fd52fcde061c', name: 'Integrate BigQuery Data and Google Workspace using Apps Script Skill B', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/02190f6d-01c5-457d-9ac0-b7fe4f31c7e6/image.png', badgeUrl: 'https://www.credly.com/badges/c7412690-d71a-4896-b0c1-fd52fcde061c' },
  { id: '7cb53a4a-0330-411e-baa3-ee326f744d85', name: 'Optimize Costs for Google Kubernetes Engine Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/258d3147-f075-4308-bdb0-fb8d5e1d4d0e/image.png', badgeUrl: 'https://www.credly.com/badges/7cb53a4a-0330-411e-baa3-ee326f744d85' },
  { id: '6a9aab6e-2adb-4f52-8eb9-c7388af69230', name: 'Protect Sensitive Data with Data Loss Prevention Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/81b8d708-19b5-4381-8ee1-576dcb20f536/image.png', badgeUrl: 'https://www.credly.com/badges/6a9aab6e-2adb-4f52-8eb9-c7388af69230' },
  { id: '34048a48-dd01-4882-b956-b666bb83778b', name: 'Create and Manage Bigtable Instances Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/cef00c62-6e0c-479c-9385-bedfd8c43dce/image.png', badgeUrl: 'https://www.credly.com/badges/34048a48-dd01-4882-b956-b666bb83778b' },
  { id: 'e5c1c355-9d0f-4ec7-b4dc-3eb6fab10215', name: 'Create and Manage Cloud Spanner Instances Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/517b0725-e59c-47ec-8a3b-8025a67dc480/image.png', badgeUrl: 'https://www.credly.com/badges/e5c1c355-9d0f-4ec7-b4dc-3eb6fab10215' },
  { id: '74f6c822-7518-4665-af16-61df1a03c669', name: 'Enhance Gemini Model Capabilities', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/9e6cd82e-c95d-4ffe-8190-32fdf032a4cb/blob', badgeUrl: 'https://www.credly.com/badges/74f6c822-7518-4665-af16-61df1a03c669' },
  { id: '8b2f8462-d732-4188-9c42-870a79881e1f', name: 'Analyze and Visualize Looker Data Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/17bffe41-23fb-4004-a5c3-ea46b6c6ed76/image.png', badgeUrl: 'https://www.credly.com/badges/8b2f8462-d732-4188-9c42-870a79881e1f' },
  { id: 'c40a2803-1f56-4666-ab64-d530077346f5', name: 'Configure Service Accounts and IAM Roles for Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/374800df-53a7-407e-b660-1efa73da122a/image.png', badgeUrl: 'https://www.credly.com/badges/c40a2803-1f56-4666-ab64-d530077346f5' },
  { id: '1fd504cd-8971-489d-90a5-fa2167b2e3d3', name: 'Create and Manage AlloyDB Instances Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/7ffcfd60-9241-4835-b783-f2558314d198/image.png', badgeUrl: 'https://www.credly.com/badges/1fd504cd-8971-489d-90a5-fa2167b2e3d3' },
  { id: 'a22dce7a-86d0-4e4a-8c8f-765ffa0035ba', name: 'Derive Insights from BigQuery Data Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/11088b22-7be5-4fe3-995d-c014514c8dc3/image.png', badgeUrl: 'https://www.credly.com/badges/a22dce7a-86d0-4e4a-8c8f-765ffa0035ba' },
  { id: '3814fd66-42a8-498b-bc49-4bcd55134f20', name: 'Manage Data Models in Looker Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/d405f3db-7764-4979-8ae4-004b47e5a497/image.png', badgeUrl: 'https://www.credly.com/badges/3814fd66-42a8-498b-bc49-4bcd55134f20' },
  { id: '9c57ccda-c45e-494a-8a38-7dc2bcf65ce0', name: 'Prompt Design in Vertex AI Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png', badgeUrl: 'https://www.credly.com/badges/9c57ccda-c45e-494a-8a38-7dc2bcf65ce0' },
  { id: 'f72f00eb-5a95-4f08-82e2-c6352c220da9', name: 'Build Real World AI Applications with Gemini and Imagen Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/b7898c75-72ce-4304-b227-0aa7563aaca9/blob', badgeUrl: 'https://www.credly.com/badges/f72f00eb-5a95-4f08-82e2-c6352c220da9' },
  { id: 'c2af2607-c13b-4a6b-821f-45b9580022df', name: 'Create a Secure Data Lake on Cloud Storage Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/64335247-e0fc-4afc-ae27-e4cdd0d0590d/image.png', badgeUrl: 'https://www.credly.com/badges/c2af2607-c13b-4a6b-821f-45b9580022df' },
  { id: 'c39d9bf5-f782-4a49-a4eb-010009fa5439', name: 'Get Started with Dataplex Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/1aa38026-5e9d-45f5-becc-288601568ad5/image.png', badgeUrl: 'https://www.credly.com/badges/c39d9bf5-f782-4a49-a4eb-010009fa5439' },
  { id: 'fb340dd6-a8e9-48f3-bd96-1527936c0de9', name: 'Secure BigLake Data Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/f4037855-1b1d-4338-985f-fec235b152a6/image.png', badgeUrl: 'https://www.credly.com/badges/fb340dd6-a8e9-48f3-bd96-1527936c0de9' },
  { id: 'dbda7812-a1de-4587-b8d6-e7b37b4f4109', name: 'Streaming Analytics into BigQuery Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/3934ff47-3ef9-40cb-82d2-66a40d33886a/image.png', badgeUrl: 'https://www.credly.com/badges/dbda7812-a1de-4587-b8d6-e7b37b4f4109' },
  { id: '17929b19-966e-47f5-bdbf-9f8b7e975db0', name: 'Analyze BigQuery Data in Connected Sheets Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/75208396-7fbe-437e-8a42-46277d642697/image.png', badgeUrl: 'https://www.credly.com/badges/17929b19-966e-47f5-bdbf-9f8b7e975db0' },
  { id: '6733dd28-039e-4424-a099-e8e6c15f7bd3', name: 'Enrich Metadata and Discovery of BigLake Data', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/9ec58f1e-2cfc-4dfc-acae-dc7de5c10da7/blob', badgeUrl: 'https://www.credly.com/badges/6733dd28-039e-4424-a099-e8e6c15f7bd3' },
  { id: '52ba5dbf-9f6e-4d0d-b045-ac38e116fcf6', name: 'Analyze Speech and Language with Google APIs Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/b82729b9-8f1f-4362-8b71-fb08f2cea6c2/image.png', badgeUrl: 'https://www.credly.com/badges/52ba5dbf-9f6e-4d0d-b045-ac38e116fcf6' },
  { id: '144bc3bb-c3c3-4bd2-b258-8d51402278f2', name: 'App Building with AppSheet Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/cdd80963-5ccb-4981-b01c-5344a9a3e8df/image.png', badgeUrl: 'https://www.credly.com/badges/144bc3bb-c3c3-4bd2-b258-8d51402278f2' },
  { id: '276b44a4-9d7c-491e-b4ed-834956bf550f', name: 'Cloud Speech API: 3 Ways Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/4ddcd71a-7d89-4f86-bb85-adab564f16f1/image.png', badgeUrl: 'https://www.credly.com/badges/276b44a4-9d7c-491e-b4ed-834956bf550f' },
  { id: '38c3b636-0517-440c-9b00-5ec3eca1d4ba', name: 'Create a Streaming Data Lake on Cloud Storage Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/2e7a4b7e-981f-49c6-96de-fb11485bfbe8/image.png', badgeUrl: 'https://www.credly.com/badges/38c3b636-0517-440c-9b00-5ec3eca1d4ba' },
  { id: '3c088769-0e9d-488f-9993-cec1281a7f80', name: 'Using the Google Cloud Speech API', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/2f0d66d4-9479-43e5-a101-42cda01123dc/image.png', badgeUrl: 'https://www.credly.com/badges/3c088769-0e9d-488f-9993-cec1281a7f80' },
  { id: 'e97a7770-999a-44cb-b125-897d3dfd5d4d', name: 'Build LookML Objects in Looker Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/2607a61b-7f94-43d7-bb97-3e811312c53e/image.png', badgeUrl: 'https://www.credly.com/badges/e97a7770-999a-44cb-b125-897d3dfd5d4d' },
  { id: '06815131-b680-4d9f-8568-06c4b344f728', name: 'Develop Serverless Apps with Firebase Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/826e89a5-1a1d-4e6c-b740-531957965a78/image.png', badgeUrl: 'https://www.credly.com/badges/06815131-b680-4d9f-8568-06c4b344f728' },
  { id: '803e491a-147e-42bc-bb20-68cc9364a711', name: 'Explore Generative AI with the Vertex AI Gemini API Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/9ecc031b-5f5a-418d-8397-1612c0f40fce/image.png', badgeUrl: 'https://www.credly.com/badges/803e491a-147e-42bc-bb20-68cc9364a711' },
  { id: '571d75af-7abb-438c-ac57-4b0761a0f142', name: 'Get Started with Google Workspace Tools Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/7e78d94e-d10b-4699-a75a-96115b24c238/image.png', badgeUrl: 'https://www.credly.com/badges/571d75af-7abb-438c-ac57-4b0761a0f142' },
  { id: 'b07d33d1-ae66-47b4-8e7c-ba544b1a57eb', name: 'Manage Kubernetes in Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/20cd679d-43c3-460e-979a-8feba38eaba6/image.png', badgeUrl: 'https://www.credly.com/badges/b07d33d1-ae66-47b4-8e7c-ba544b1a57eb' },
  { id: '41a31bc3-e669-4849-9846-67b2f785f0e4', name: 'Perform Predictive Data Analysis in BigQuery Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/d41246ef-1f8e-4b3a-b93d-034e7c66e309/image.png', badgeUrl: 'https://www.credly.com/badges/41a31bc3-e669-4849-9846-67b2f785f0e4' },
  { id: 'b13c56b8-94c7-4347-a1af-c11dd06de0c4', name: 'Use Functions, Formulas, and Charts in Google Sheets Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/f469072b-7e9a-4961-8096-292853f063e7/image.png', badgeUrl: 'https://www.credly.com/badges/b13c56b8-94c7-4347-a1af-c11dd06de0c4' },
  { id: 'bd589d17-d131-4eac-8c6f-00247c848ef0', name: 'AWS Educate Introduction to Generative AI - Training Badge', issuer: 'AWS', imageUrl: 'https://images.credly.com/images/e50c657a-edd9-4c93-b1cf-2b6634b54abf/blob', badgeUrl: 'https://www.credly.com/badges/bd589d17-d131-4eac-8c6f-00247c848ef0' },
  { id: '6ef97cd8-97d3-4e57-92de-6a5cf2bb3bea', name: 'Deploy Kubernetes Applications on Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/f0388a0c-130f-47cd-8750-d6357e907e58/image.png', badgeUrl: 'https://www.credly.com/badges/6ef97cd8-97d3-4e57-92de-6a5cf2bb3bea' },
  { id: '5d69b6fe-79de-4feb-9975-0624f2d7bfb2', name: 'Build a Secure Google Cloud Network Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/e1131ae3-4a52-4af1-9801-b7853767cf79/image.png', badgeUrl: 'https://www.credly.com/badges/5d69b6fe-79de-4feb-9975-0624f2d7bfb2' },
  { id: '62ebb113-095f-4693-bf1e-0942c1459b60', name: 'Build Infrastructure with Terraform on Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/b18154fb-9bd3-47e5-a6f1-554be512947d/image.png', badgeUrl: 'https://www.credly.com/badges/62ebb113-095f-4693-bf1e-0942c1459b60' },
  { id: '3d35a704-82ff-4fed-b6d5-70bc7812275a', name: 'Develop Your Google Cloud Network Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/b126c61c-4781-4f03-9b2b-062963003abf/image.png', badgeUrl: 'https://www.credly.com/badges/3d35a704-82ff-4fed-b6d5-70bc7812275a' },
  { id: '43043e66-50e0-4d6e-97c8-8e0ec95b0608', name: 'Implement Load Balancing on Compute Engine Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png', badgeUrl: 'https://www.credly.com/badges/43043e66-50e0-4d6e-97c8-8e0ec95b0608' },
  { id: '4cf615ad-3bfe-4161-9747-e5e4e7d4358d', name: 'Set Up a Google Cloud Network Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/189c5c31-67c6-4eae-87dc-3b8185a99043/image.png', badgeUrl: 'https://www.credly.com/badges/4cf615ad-3bfe-4161-9747-e5e4e7d4358d' },
  { id: 'ab5e9d03-75b5-49ea-99d6-7a8cd2858a24', name: 'Set Up an App Dev Environment on Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png', badgeUrl: 'https://www.credly.com/badges/ab5e9d03-75b5-49ea-99d6-7a8cd2858a24' },
  { id: '2b8e2584-6908-4f2e-828d-58e7fcf88f7f', name: 'Monitor and Log with Google Cloud Operations Suite Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/030ef753-5a56-4a6b-887a-a329a1b0c986/image.png', badgeUrl: 'https://www.credly.com/badges/2b8e2584-6908-4f2e-828d-58e7fcf88f7f' },
  { id: 'ace980b0-6f8d-4424-902d-bad26573cbcf', name: 'Monitor and Manage Google Cloud Resources Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/c07b49a7-c295-4e2a-9557-09c22032e3ae/image.png', badgeUrl: 'https://www.credly.com/badges/ace980b0-6f8d-4424-902d-bad26573cbcf' },
  { id: 'c6703848-15d2-4946-8f5f-e7b64475ad60', name: 'Monitoring in Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/5a9654e8-37e5-4043-8a94-eeb0f98a2a9c/image.png', badgeUrl: 'https://www.credly.com/badges/c6703848-15d2-4946-8f5f-e7b64475ad60' },
  { id: '3ce5b6ca-fd73-4f68-86af-d6d55895b34e', name: 'Networking Fundamentals on Google Cloud Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/6edf3d92-7a1f-425f-aa2b-d17223df9cf7/image.png', badgeUrl: 'https://www.credly.com/badges/3ce5b6ca-fd73-4f68-86af-d6d55895b34e' },
  { id: '8c7a45a7-f318-4b30-9a11-32fbeab2a914', name: 'Get Started with Looker Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/6f45928f-206d-4340-98fd-ef9605fd8606/image.png', badgeUrl: 'https://www.credly.com/badges/8c7a45a7-f318-4b30-9a11-32fbeab2a914' },
  { id: 'dda23a55-37a8-40cc-a433-e5f05934c3f6', name: 'Store, Process, and Manage Data on Google Cloud - Command Line Skill B', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/42242faf-e2ec-4c2c-aa57-8c27b190dd83/image.png', badgeUrl: 'https://www.credly.com/badges/dda23a55-37a8-40cc-a433-e5f05934c3f6' },
  { id: '4c00771e-f67f-4be4-8032-9b037efe3ed0', name: 'Store, Process, and Manage Data on Google Cloud - Console Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/449ee94a-268c-4a6d-9983-0507fbdeaf46/image.png', badgeUrl: 'https://www.credly.com/badges/4c00771e-f67f-4be4-8032-9b037efe3ed0' },
  { id: 'b7e5ff2e-0de4-4dd4-8f29-5aebe23cca9f', name: 'Get Started with Pub/Sub Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/4b9b3bd9-02b8-4243-8def-893557125497/image.png', badgeUrl: 'https://www.credly.com/badges/b7e5ff2e-0de4-4dd4-8f29-5aebe23cca9f' },
  { id: '4a9c8e9e-98c1-4be6-abb8-1e0f64581ad1', name: 'Get Started with API Gateway Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/79d45afd-9552-447b-96d0-b4c2037f59be/image.png', badgeUrl: 'https://www.credly.com/badges/4a9c8e9e-98c1-4be6-abb8-1e0f64581ad1' },
  { id: 'b28d9ba4-9239-4747-af13-0f1f7eee8412', name: 'Get Started with Cloud Storage Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/8fae0693-0a1a-4c15-b3b6-10b4104d0e30/image.png', badgeUrl: 'https://www.credly.com/badges/b28d9ba4-9239-4747-af13-0f1f7eee8412' },
  { id: 'cb096aa6-958d-4c60-824b-8643207f8857', name: 'Use APIs to Work with Cloud Storage Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/0c6a247d-8bbd-407b-8f83-dd863d251587/image.png', badgeUrl: 'https://www.credly.com/badges/cb096aa6-958d-4c60-824b-8643207f8857' },
  { id: 'e506e6d8-adeb-4856-80ca-39f20dd896b7', name: 'App Engine: 3 Ways Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/0943ce78-1ef7-4ff4-8ad7-4b60f6de5e5f/image.png', badgeUrl: 'https://www.credly.com/badges/e506e6d8-adeb-4856-80ca-39f20dd896b7' },
  { id: '30c256f8-5246-4882-8266-0ec3c909caf5', name: 'Cloud Functions: 3 Ways Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/12ca3878-2560-4d84-a3a5-c317db9ca549/image.png', badgeUrl: 'https://www.credly.com/badges/30c256f8-5246-4882-8266-0ec3c909caf5' },
  { id: '75d7250c-50ea-4f1d-8393-ad7c166433cc', name: 'The Basics of Google Cloud Compute Skill Badge', issuer: 'Google Cloud', imageUrl: 'https://images.credly.com/images/7623fefd-ebbd-4d8f-a053-f41dca852d9e/image.png', badgeUrl: 'https://www.credly.com/badges/75d7250c-50ea-4f1d-8393-ad7c166433cc' },
  { id: 'a7da59e6-7636-4f9d-a6ff-46d98aa76ba8', name: 'Networking Basics', issuer: 'Cisco', imageUrl: 'https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png', badgeUrl: 'https://www.credly.com/badges/a7da59e6-7636-4f9d-a6ff-46d98aa76ba8' },
  { id: 'd0788b6a-3738-48ce-8751-12e9c8e88dd0', name: 'Introduction to Cybersecurity', issuer: 'Cisco', imageUrl: 'https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png', badgeUrl: 'https://www.credly.com/badges/d0788b6a-3738-48ce-8751-12e9c8e88dd0' },
]

function BadgeTile({ badge }: { badge: typeof ALL_BADGES[0] }) {
  const [imgError, setImgError] = useState(false)
  return (
    <a
      href={badge.badgeUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`${badge.name} — ${badge.issuer}`}
      className="flex-shrink-0 w-40 glass-card rounded-2xl p-4 flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/20 hover:border-accent/30 transition-all duration-300 group border border-white/5 mx-2 focus-ring"
      aria-label={`${badge.name} by ${badge.issuer}`}
    >
      <div className="relative w-24 h-24 mb-3">
        {!imgError ? (
          <Image
            src={badge.imageUrl}
            alt={badge.name}
            fill
            className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-4xl">🏅</span>
          </div>
        )}
      </div>
      <p className="text-xs leading-snug text-foreground/80 group-hover:text-accent transition-colors line-clamp-3 font-medium">
        {badge.name}
      </p>
      <p className="text-[10px] text-muted-foreground mt-1 truncate w-full text-center">
        {badge.issuer}
      </p>
    </a>
  )
}

function MarqueeRow({ badges, reverse = false }: { badges: typeof ALL_BADGES; reverse?: boolean }) {
  const doubled = [...badges, ...badges]
  const duration = `${Math.max(60, badges.length * 3)}s`
  return (
    <div className="overflow-hidden relative">
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--background), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--background), transparent)' }}
      />
      <div
        className={`flex py-3 ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}
        style={{ width: 'max-content', '--marquee-duration': duration } as React.CSSProperties}
      >
        {doubled.map((badge, i) => (
          <BadgeTile key={`${badge.id}-${i}`} badge={badge} />
        ))}
      </div>
    </div>
  )
}

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('is-visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    section.querySelectorAll('.animate-on-scroll').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const mid = Math.floor(ALL_BADGES.length / 2)
  const row2 = [...ALL_BADGES.slice(mid), ...ALL_BADGES.slice(0, mid)]

  return (
    <section
      id="certifications"
      className="py-24 bg-muted/20 relative z-20"
      ref={sectionRef}
      aria-labelledby="certs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 id="certs-heading" className="text-3xl md:text-4xl font-display font-bold mb-3">
            <span className="section-title">Certifications &amp; Badges</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Verified credentials from Google Cloud, AWS, IBM &amp; Cisco — earned through hands-on labs and assessments.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { value: '93', label: 'Digital Badges' },
              { value: '4', label: 'Organizations' },
              { value: '✓', label: 'All Verified' },
            ].map(({ value, label }) => (
              <div key={label} className="glass-card rounded-xl px-5 py-2.5 flex items-center gap-2">
                <span className="text-xl font-display font-bold text-accent">{value}</span>
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 animate-on-scroll delay-200">
          <MarqueeRow badges={ALL_BADGES} reverse={false} />
          <MarqueeRow badges={row2} reverse={true} />
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <a
            href="https://www.credly.com/users/aqil-afif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium focus-ring"
          >
            View All Badges on Credly <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
