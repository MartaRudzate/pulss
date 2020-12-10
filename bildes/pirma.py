import numpy as np
import matplotlib.pyplot as plt


xm = np.array([78, 82, 72, 76, 74, 69])
xp = np.array([65, 70, 62, 82])

ym = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44])
yp = np.array([94.94, 84.51, 99.12, 42.55])



plt.scatter(xp, yp, c = 'c', marker = 'o', label = "Puiši")
plt.scatter(xm, ym,c = 'm', marker = 'o', label = "Meitenes")
plt.title("Fiziskā sagatavotība/miera pulss")
plt.xlabel("Miera stāvokļa pulss")
plt.ylabel("Fiziskās sagatavotības indekss")
x = np.array([78, 82, 72, 77, 74, 69, 65, 70, 62, 82])
y = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44, 94.94, 84.51, 99.12, 42.55])
m, b = np.polyfit(x, y, 1)
plt.plot(x, m*x + b)
plt.legend(loc = "center left", bbox_to_anchor = (1, 0.5), numpoints = 1)



plt.show()
