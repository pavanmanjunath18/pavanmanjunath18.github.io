# Resume Project Bullets (reference only)

Three-bullet versions of all 8 portfolio projects. Swap projects in and out of a resume as needed. Every figure was checked against the project repos.

Style rules: no em dashes or en dashes anywhere. Keep numbers exactly as written unless the repo changes.

---

## Subscription Churn Analytics | SQL, dbt, DuckDB, Python, ECharts | Deployed Project

- Built a dbt + DuckDB warehouse (16 models, 21 tests) over 23M KKBox billing transactions and 12.1M renewal decisions, producing MRR bridges that reconcile every month, cohort retention, and NRR / GRR of 77.7% / 76.0%.
- Found billing behavior drives churn more than listening: manual renewers churn at 20.9% vs 2.8% on auto-renew (7.5×) and 50%+ discount periods at 69.2%, quantifying NT$79.0M of monthly revenue churned over 12 months.
- Caught data-quality issues that changed the answers, including 23 missing payment-method months that faked a 14% churn spike and a survivor bias that overstated 12-month retention by about 20 points.

## ReadmitScope US | Python, Pandas, SciPy, CMS Data, React | Deployed Project

- Found readmission performance is a hospital-level trait: 9.2% of hospitals reporting 3+ conditions are worse than expected on every one, about twice the 4.7% chance predicts, across 11,720 CMS measures and 6 conditions.
- Built reproducible Python (Pandas) cleaning and QA workflows for suppression-prone CMS data, then used hospital-clustered tests (SciPy) to show the "small hospitals do worst" pattern is a reporting artifact (p=0.76) while star rating tracks readmissions (p<0.001).
- Designed and deployed an interactive React dashboard with a searchable, sortable 2,833-hospital explorer and state rankings, translating CMS quality metrics into facility-level comparisons and actionable insights.

## Credit Decisioning Engine | Python, SQL (DuckDB), XGBoost, SHAP | Deployed Project

- Analyzed 618K LendingClub loans using Python and DuckDB SQL to evaluate credit risk, repayment outcomes, and approval strategy, finding the right policy depends on cost of capital: nearly everyone should be approved at a 0% funding cost, but not at 4%.
- Built a profit-based approval strategy showing that, at a 4% cost of funds, declining the riskiest 12% increases profit 13.8%, and that ranking applicants with the model earns $6.4M more than LendingClub's sub-grade at 84% approval.
- Developed fairness and drift monitoring using income-band analysis and PSI in an interactive dashboard, finding that at an 80% approval stress test applicants under $40K are approved at 0.53× the top income band's rate.

## Enterprise Data Lakehouse Integration Platform | Databricks, PySpark, Delta Lake, AWS S3 | GitHub

- Built an end-to-end Lakehouse data platform in Databricks using Bronze, Silver, and Gold layers to integrate and standardize data from multiple business systems, enabling a unified analytics environment for reporting and decision-making.
- Developed PySpark ETL pipelines with Delta Lake MERGE operations for historical backfills, incremental processing, schema harmonization, data quality validation, and automated ingestion from AWS S3 into curated analytical datasets.
- Designed interactive Databricks dashboards and analytics-ready Gold layer views, leveraging Unity Catalog governance and external S3 integrations to deliver scalable, reliable business insights across sales, customers, products, and revenue metrics.

## Plant Disease Classifier | PyTorch, EfficientNet-B0, Streamlit, Weights & Biases | GitHub

- Built an end-to-end plant disease classification system using transfer learning with EfficientNet-B0 (PyTorch/Torchvision) on the PlantVillage dataset (38 classes, 54K images), achieving 98.21% accuracy and 0.9765 Macro F1 on the held-out test set.
- Implemented two-phase transfer learning, training the classification head on a frozen backbone and then fine-tuning the last two feature blocks at a 10× lower learning rate, with checkpoints selected on validation macro F1 and runs tracked in Weights & Biases.
- Deployed the model through a Streamlit app for real-time inference that shows top-5 probabilities, flags predictions below 60% confidence, and logs every prediction, plus a CLI for batch inference and per-class evaluation reports.

## CardioScope 3D | React, TypeScript, Three.js, PCA, k-means, Logistic Regression | Deployed Project

- Built an interactive 3D cardiovascular risk explorer on the UCI Cleveland dataset (297 patients), projecting 13 clinical features into PCA space and running k-means clustering in the browser, where unlabeled clusters at k=2 reach 81% purity against true diagnosis.
- Trained a regularized logistic regression risk model with stratified 10-fold cross-validation (standardization refit inside each fold), reaching ROC-AUC 0.906 and 83.8% accuracy, and reporting the optimistic training-set fit only for comparison.
- Built an explainable risk simulator where users adjust 13 inputs to see live probability, each feature's log-odds contribution versus the average patient, and the 5 most similar real patients, with unit tests and CI.

## RAG Document Assistant | Python, Qwen2.5, ChromaDB, FastAPI | GitHub

- Built a fully offline retrieval-augmented generation service (Qwen2.5-1.5B, ChromaDB, MiniLM, FastAPI) that answers questions over Netflix's FY2025 10-K with cited sources, covered by 171 tests.
- Built an evaluation harness comparing answers with and without retrieval: correct answers rose from 1/8 to 6/8, and on 9 held-out questions the model got 4 right and declined 3 rather than guessing.
- Diagnosed and fixed 4 pipeline failures, including over-refusal from a too-strict prompt and the model inventing a debt total the filing never reports, documenting each in a decisions log.

## SmartBudget | React, FastAPI, PostgreSQL | Deployed Project

- Built double-entry bookkeeping software for freelancers (FastAPI, PostgreSQL, React/TypeScript) where every journal entry balances to zero, money is stored as integer cents, and posted entries are immutable and corrected only by reversing entries.
- Built idempotent bank-CSV import with column mapping, per-row error reports and fingerprint deduplication, plus a rules, then vendor cache, then LLM categorization flow that sends only descriptions (never amounts) and posts nothing until a person accepts it.
- Delivered invoices with AR aging, profit and loss, balance sheet, cash flow and bank reconciliation, with multi-tenant isolation tested per resource type (150+ backend tests, CI), deployed on Vercel with Neon Postgres.

---

## Verification notes

- **RAG Document Assistant:** The 6/8 result is on the notebook's 8 benchmark questions, which the prompt was tuned on (1/8 without retrieval). Only the 4/9 result is on questions not used for tuning. Do not describe the 8 benchmark questions as held-out.
- **CardioScope 3D:** The stack is React, TypeScript and Three.js, with PCA and k-means run in the browser (`ml-pca`, `ml-kmeans`) and the model fit offline by a Node script. It is not Python or scikit-learn. The 0.906 AUC is the cross-validated figure; the training-set fit (0.934) is optimistic.
- **SmartBudget:** The README states 153 backend tests. About 125 test functions were counted directly, so parametrized cases likely make up the rest. "150+" holds either way. The frontend has 17 unit tests.
- **Plant Disease Classifier:** 54,305 images across 38 classes and 14 crops. Test accuracy 98.21%, macro F1 0.9765, on a 4.06M parameter model.
- **Enterprise Data Lakehouse:** Bullets are as originally written. "External S3 integrations" is not stated in the repo README, which says S3 landing zone and Unity Catalog, so confirm or trim it. Harder numbers available from the README if wanted: 124 historical backfill files (Jul to Nov 2025), 31 incremental files (Dec 2025), six documented data-quality failure modes fixed in code, and a dashboard showing 119.93B revenue across 54 customers.
- **ReadmitScope US:** Correct figures are 2,833 hospitals, 9.2% of hospitals reporting 3+ conditions worse than expected on every one (about twice the 4.7% chance predicts), and the small-hospital effect being a reporting artifact (p=0.76). Do not use earlier figures such as 77.2%, 3,000+ hospitals or a 99.7% match rate.
- **Subscription Churn Analytics:** The out-of-time AUC of 0.944 is on the portfolio card. The warehouse is built on real KKBox data, so the synthetic-data caveat that applied to the removed SaaS project does not apply here.

## Repos and live links

| Project | Repo | Live |
|---|---|---|
| Subscription Churn Analytics | github.com/pavanmanjunath18/subscription-churn-analytics | subscription-churn-analytics.vercel.app |
| ReadmitScope US | github.com/pavanmanjunath18/readmitscope | readmitscope.vercel.app |
| Credit Decisioning Engine | github.com/pavanmanjunath18/credit-decisioning-engine | credit-decisioning-engine-zeta.vercel.app |
| Enterprise Data Lakehouse | github.com/pavanmanjunath18/enterprise-retail-lakehouse-aws-databricks | none |
| Plant Disease Classifier | github.com/pavanmanjunath18/Plant_Disease_Classifier | none |
| CardioScope 3D | github.com/pavanmanjunath18/cardioscope-3d | cardioscope-3d.vercel.app |
| RAG Document Assistant | github.com/pavanmanjunath18/rag-doc-assistant | none |
| SmartBudget | github.com/pavanmanjunath18/SmartBudget | smartbudget-vert-ten.vercel.app |
