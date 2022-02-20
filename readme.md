# README for Emiit AI Team's approach

## Short-term Analysis

- Techniques used: Random Forest
- Reference: https://towardsdatascience.com/random-forest-in-python-24d0893d51c0

### Key Points

1. We created a random forest model to predict emission values for upcoming three months. Based on this model, we also perform feature importance analysis for each x variable. 

2. Our feature importance scores agree with our intuition that Logging Equipment and limestone users are one of the most important contributors to the future emission prediction.

3. Further steps can include looking into advancing our feature selection process by comparing which features are important for different types of industries.

### Observation on the training model

1. Our test error already appears to be miniscule. Our absolute error is lying somewhere between 0.1 and 0.3, which is almost negligible going from max(y_test), which is 29478192.36, and min(y_test), which is 1656916.63.

2. We only have 24 training samples (x_train.shape) and 9 testing points (y_test.shape) for 96 features. This means that our model is just for the proof of concept and an initial study. 

3. During the phase of the contest, we have explored other possible approaches to optimize our model. For instance, we looked into ways to enhance test performance by optimizing a tuning parameter or K-fold cross-validation. Since our model is already performing well on the test set, additional optimizations will diminish our returns. In this sense, we are excited to keep using our approach when we have access to more extensive data.

### Conclusion

Having access to more data, we will allow us to make sure that our model performs well in real-life situations in terms of predicting emissions.

## Long-term Analysis

- Techniques used: Integrated Assessment Modeling
- Reference: https://github.com/JGCRI/gcam-core

### Key Points

1. We conceptualized firm's decarbonization pathways by 2050 in terms of energy use and emissions based on GCAM(Global Change Analysis Model).

2. Our model subdivides the company's specific energy use and emissions from the final demand sector, including buildings (residential and commercial), transportation (passenger and freight, including road, rail, air, and shipping), and industrial (fertilizer, cement, and general industry) sectors.

3. Our model can improve its accuracy depending on whether detailed technology characteristics data for a company's energy services are secured.

### Model Analysis Example

Our model analysis help clients identify the most cost-effective mitigation projects and strategies like described below.

- In terms of BOSCO's 2050 carbon neutrality, improvement in the indirect emission is needed to offset much of the direct emission of carbon emissions remaining in the BOSCO in 2050.

- Electrification of the BOSCO's energy use and the increase in the proportion of hydrogen energy consumption will play a key role in decarbonization in the BOSCO. This means that mid- to long-term investments must be made to increase renewable energy generation and green hydrogen production in order to achieve carbon neutrality.

- In order to decarbonize the BOSCO that meets 2050 carbon neutrality, it is necessary to rapidly expand DRI-based electric furnace technology (DRI-EAF-H2 and DRI-EAF-CCS) equipped with hydrogen based DRI and CCS, and phase-out blast Furnace without CCS. In addition, it is inevitable to expand the scrap-based electric arc furnace (EAF-scrap) along with the phase-out of the blast furnace to meet steel demand.

- The reduction in steel output by improving material efficiency does not contribute significantly to the reduction in greenhouse gas emissions in the BOSCO. However, improving material efficiency reduces power generation and hydrogen production, which suggests that it is important to consider improving material efficiency in investment plans in the power and hydrogen production sectors to achieve carbon neutrality targets.
