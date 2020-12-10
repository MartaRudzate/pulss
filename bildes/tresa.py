import numpy as np
import matplotlib.pyplot as plt

xm = np.array([100, 108, 117, 90, 87, 83])
xp = np.array([74, 79, 74, 111])

ym = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44])
yp = np.array([94.94, 84.51, 99.12, 42.55])


plt.scatter(xm, ym, c = 'm', marker = 'o', label = "Meitenes")
plt.scatter(xp, yp, c = 'c', marker = 'o', label = "Puiši")
plt.title("Fiziskā sagatavotība, stress")
plt.xlabel("Vidējais pulss stresa laikā")
plt.ylabel("Fiziskās sagatavotības indekss")
x = np.array([100, 108, 90, 87, 83, 74, 79, 74, 111])
y = np.array([44.44, 46.32, 83.33, 78.95, 74.44, 94.94, 84.51, 99.12, 42.55])
m, b = np.polyfit(x, y, 1)
plt.plot(x, m*x + b)
plt.legend(loc = 3)


plt.legend(loc = "center left", bbox_to_anchor = (1, 0.5), numpoints = 1)


plt.show()