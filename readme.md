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

- To achieve the 2050 carbon neutrality, POSCO's steel sector emissions need to fall by 51% by 2030 and 98% by 2050. The Blast furnace was phased out and replaced by scrap and hydrogen-based DRI steel production.

- Coal contributes about 85% of the energy used in POSCO’s steel sector today. In the 2050 carbon neutrality scenario, this share drops to 40% in 2030. Coal is completely phased out of steel production in South Korea by 2050.

- Our 2050 carbon neutrality scenario relies on a large scale up of renewables capacity: 56% of electricity production in 2030 is clean. In 2050, 100% of electricity production is clean. The 1.5°C scenario also shows an increase in hydrogen use, from 0.0 EJ in use today to 0.14 EJ in 2050. In the 2050 carbon neutrality scenario, 76% of hydrogen produced in POSCO is green and 23% is blue by 2050.

- As the world’s sixth largest steelmaker with ambitious climate commitments and policies at government and company level, POSCO is well positioned to help accelerate the steel sector transition.
