# OncoSurvival https://onco-survival-ml-front-end.vercel.app/interactive-landing-hub
## Clinicogenomic Survival Modeling in Breast Cancer

OncoSurvival is a clinicogenomic survival modeling system built to study why breast cancer outcomes vary so widely even among patients with similar clinical staging. It combines high-dimensional gene expression profiles with established clinical predictors and evaluates both classical statistical and nonlinear machine learning frameworks for survival analysis.
The system is constructed using the TCGA-BRCA cohort for model development and the METABRIC cohort for external validation, enabling assessment of both predictive performance and cross-cohort generalization. The final model is a structured attempt to understand survival as a biological and statistical problem at the same time.

## Motivation and Problem Framing

Survival outcomes in breast cancer vary substantially even among patients with similar clinical staging. While clinical variables such as age at diagnosis and lymph node involvement provide baseline prognostic information, they fail to capture the underlying biological heterogeneity reflected in tumor gene expression.
At the same time, purely data-driven machine learning approaches often sacrifice interpretability for predictive performance, limiting their clinical relevance.
This project is built around a central objective:
to construct a survival modeling framework that integrates biological signal with clinical structure while preserving interpretability and maintaining methodological rigor.That is why the workflow moves from high-dimensional screening to biologically refined signatures, and then to cross-platform validation and clinical integration.

## Datasets
1. TCGA-BRCA (internal cohort): RNA-seq–based breast cancer dataset comprising ~1,000 patients with matched clinical data, used for model development and internal evaluation (best internal C-index ≈ 0.79).

2. METABRIC (external cohort): Microarray-based breast cancer dataset comprising ~2,000 patients, used for independent external validation (best external C-index ≈ 0.64).

## Model Overview

The pipeline begins with 60,660 genes in TCGA-BRCA and a clean survival endpoint, then filters the data through quality control, variance filtering, univariate Cox screening, and multivariate modeling. The first discovery space is reduced to 300 survival-associated genes, then refined to a 50-gene tumor-intrinsic signature. That signature is tested with Cox, Random Survival Forest, and XGBoost, then harmonized across platforms and reduced again to 31 overlapping genes for METABRIC external validation under a strictly controlled training and validation protocol. Finally, age and lymph node status are added, producing a 33-feature clinicogenomic model. The strongest external result comes from the integrated RSF model, which reaches a METABRIC C-index of 0.641 and strong internal index of  ≈ 0.79.

## System Architecture

**Pipeline**

**1. Raw Data**

* TCGA-BRCA (RNA-seq + clinical)
* METABRIC (external validation)

**2. Preprocessing**

* 60,660 genes → variance filtering → 10,000 genes
* Standardization (z-score)

**3. Survival Signal Extraction**

* Univariate Cox screening → 300 genes

**4. Modeling Hierarchy**

* Elastic Net Cox
* Random Survival Forest
* XGBoost Survival

**5. Biological Refinement**

* 300 → 100 → 64 → 50 gene signature

**6. External Validation**

* Cross-platform validation (31 shared genes)

**7. Clinical Integration**

* Final model: 31 genes + clinical variables


# Mathematical Foundations

The system is formulated as a time-to-event problem under right censoring. For each patient i, we observe a feature vector Xi, survival time Ti, and event indicator <img width="21" height="25" alt="image" src="https://github.com/user-attachments/assets/8c476b40-6777-4642-b5f7-2cea93ad115e" />
 The objective is to estimate the conditional survival function
<img width="249" height="43" alt="image" src="https://github.com/user-attachments/assets/d626198a-f9d9-4096-b28b-299a10be039b" /> and the associated hazard function, which describes how risk evolves over time.

A classical baseline is given by the Cox proportional hazards model
<img width="213" height="34" alt="image" src="https://github.com/user-attachments/assets/18f53837-fdea-4860-a2ea-c6688b14cecf" />
where <img width="39" height="25" alt="image" src="https://github.com/user-attachments/assets/3dceda3a-6055-4a46-baff-a16c4740f9e5" /> is an unspecified baseline hazard and <img width="75" height="26" alt="image" src="https://github.com/user-attachments/assets/e79d2294-e55a-480e-83f1-f9f937b997d5" /> represents relative risk. Parameters are estimated using the partial likelihood
<img width="275" height="59" alt="image" src="https://github.com/user-attachments/assets/4233f745-4ace-4b19-9c72-29f9ab32758a" /> which depends only on risk sets <img width="43" height="28" alt="image" src="https://github.com/user-attachments/assets/9dfc94bd-de70-42f9-a85c-63ab3a1021bd" />
and reduces the problem to correctly ordering individuals by risk. 
Model performance is evaluated using the concordance index
<img width="286" height="39" alt="image" src="https://github.com/user-attachments/assets/eeb4e3f1-bb78-42c4-8755-aca25e6e50e2" />
which measures the probability that predicted risk scores preserve the correct ordering of survival times. This makes evaluation consistent with the ranking objective implicit in the Cox formulation.
The Cox model assumes proportional hazards and linear additive effects. These assumptions are restrictive in high-dimensional transcriptomic settings, where survival is influenced by interacting biological processes. To capture this structure, the system incorporates Random Survival Forests, which partition the feature space and estimate survival within nodes using log-rank based splitting, allowing nonlinear interactions and heterogeneous risk patterns to emerge.
Feature reduction is guided by survival-aware filtering rather than arbitrary selection. Variance filtering removes near-constant features, and univariate Cox screening selects features with statistically significant association to survival through hazard ratios and Wald tests. This ensures that dimensionality reduction preserves survival-relevant signal before nonlinear modeling is applied.
The observed results reflect these assumptions. Linear models perform well when structure is approximately additive, while nonlinear ensemble methods show stronger generalization under distribution shift, indicating that survival risk in this setting is interaction-dependent.

## Modeling Insights

A consistent modeling hierarchy emerges across both the 300-gene and refined 50-gene feature spaces:

sparse linear < additive linear < nonlinear ensemble

Sparse linear models fail to generalize, indicating that survival signal cannot be reduced to a small set of independent predictors. Additive Cox models recover partial structure, achieving strong internal performance (TCGA C-index ≈ 0.79) but attenuating under external validation (METABRIC C-index ≈ 0.63), suggesting that linear effects alone are insufficient under cohort shift. Nonlinear ensemble models, particularly Random Survival Forests, show greater stability, with slightly lower internal performance (TCGA C-index ≈ 0.74) but improved external concordance (METABRIC C-index ≈ 0.64).

This pattern indicates that survival risk is neither sparse nor purely additive, but interaction-dependent. In the 300-gene space, elastic net Cox performs weakly relative to ensemble methods, and in the refined 50-gene space the same structure persists, with RSF achieving the strongest discrimination (C-index ≈ 0.72). The refined gene set converges on a coherent survival architecture linking immune microenvironment variation with tumor-intrinsic structural programs, reinforcing that survival is governed by coordinated biological systems rather than isolated predictors.

## Model Assumptions and Structural Implications

The Cox proportional hazards model assumes that covariate effects are linear and additive in the log-risk space, with proportional hazards over time. In high-dimensional transcriptomic settings, these assumptions are restrictive. Biological processes are not independent; they are organized into interacting pathways and regulatory networks. As a result, survival risk is not driven by isolated gene effects, but by coordinated activity across multiple systems, introducing nonlinear dependencies that cannot be captured within a purely linear framework.

To address this, the system incorporates Random Survival Forests, which extend decision tree ensembles to censored survival data. RSF models recursively partition the feature space and estimate survival within nodes, aggregating predictions across trees. This allows the model to capture nonlinear relationships, interaction effects across gene expression profiles, and heterogeneous risk patterns across subpopulations, without imposing proportional hazards or linearity constraints.

The empirical results reflect these structural differences. Linear Cox models achieve strong performance within the training distribution, where additive structure is partially aligned with the data. However, performance degrades under external validation, where deviations from proportional hazards and linearity become more pronounced. In contrast, Random Survival Forests demonstrate greater stability across cohorts, indicating that the underlying survival signal is interaction-dependent.

Taken together, the agreement between model assumptions, empirical behavior, and biological interpretation supports a consistent conclusion: survival in this setting is governed by coordinated, system-level processes rather than independent predictors.

## Biological Interpretation

Feature refinement and enrichment analysis reveal that survival-associated transcriptomic structure is not random but organized into coherent biological programs.

Two complementary components emerge:

Immune microenvironment signal, reflecting variability in immune infiltration and adaptive response
Tumor-intrinsic structural programs, involving extracellular matrix remodeling, cytoskeletal organization, developmental signaling, and membrane dynamics

These findings indicate that survival risk is encoded at the level of coordinated biological systems rather than isolated gene effects. The improved performance of nonlinear models aligns with this observation, as such models are better suited to capture interaction-dependent processes.

## External Validation and Generalization

When evaluated on the METABRIC cohort, all models exhibit expected attenuation in concordance due to platform and cohort differences. However, survival stratification remains statistically significant across models, indicating that the underlying survival structure generalizes beyond the discovery dataset.
Integration of clinical variables improves external performance across all modeling frameworks, with the clinicogenomic Random Survival Forest achieving the highest external concordance.
This pattern reflects a balance between biological signal and clinical stability, with linear models demonstrating robustness and nonlinear models capturing richer internal structure.

## Limitations

The system is subject to several limitations, including cross-platform variability between RNA-seq and microarray data, cohort-specific differences, and attenuation of nonlinear model performance under external validation.
Accordingly, the model is positioned as a research framework for understanding survival architecture rather than a directly deployable clinical tool.


This project demonstrates that survival heterogeneity in breast cancer is best understood as an interaction-dependent, system-level phenomenon. Linear models provide partial explanation, but the full structure emerges only when biological coordination and nonlinear relationships are taken into account.
The objective of this work is not only to improve prediction, but to clarify the structure of survival itself.

# Full Mathematical Derivation

See:  → Mathematical Deep Dive: Survival Modeling (https://github.com/nikkipikkii/OncoSurvivalML_FrontEnd/blob/main/Mathematical%20Deep%20Dive%3A%20Integrated%20Clinicogenomic%20Survival%20Modeling.md )
