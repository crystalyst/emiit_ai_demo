# README for Emiit AI Team's approach

- Techniques used: Random Forest
- Reference: https://towardsdatascience.com/random-forest-in-python-24d0893d51c0

## Key Points
1. We created a random forest model to predict emission values for upcoming three months. Based on this model, we also perform feature importance analysis for each x variable. 

2. Our feature importance scores agree with our intuition that Logging Equipment and limestone users are one of the most important contributors to the future emission prediction.

3. Further steps can include looking into advancing our feature selection process by comparing which features are important for different types of industries.

## Observation on the training model

1. Our test error already appears to be miniscule. Our absolute error is lying somewhere between 0.1 and 0.3, which is almost negligible going from max(y_test), which is 29478192.36, and min(y_test), which is 1656916.63.

2. We only have 24 training samples (x_train.shape) and 9 testing points (y_test.shape) for 96 features. This means that our model is just for the proof of concept and an initial study. 

3. During the phase of the contest, we have explored other possible approaches to optimize our model. For instance, we looked into ways to enhance test performance by optimizing a tuning parameter or K-fold cross-validation. Since our model is already performing well on the test set, additional optimizations will diminish our returns. In this sense, we are excited to keep using our approach when we have access to more extensive data.

## Conclusion

Having access to more data, we will allow us to make sure that our model performs well in real-life situations in terms of predicting emissions.

