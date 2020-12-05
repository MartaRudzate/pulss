import numpy as np
import matplotlib.pyplot as plt

x = np.array([1, 3, 5, 7])


y = np.array([ 6, 3, 9, 5 ])
plt.plot(x, y, 'o')



m, b = np.polyfit(x, y, 1)



plt.plot(x, m*x + b)