import numpy as np
import matplotlib.pyplot as plt

xm = np.array([78, 82, 72, 76, 74, 69])
xp = np.array([65, 70, 62, 82])

ym = np.array([100, 108, 117, 90, 87, 83])
yp = np.array([74, 79, 74, 111])


plt.scatter(xp, yp,c = 'c', marker = 'o', label = "Puiši")
plt.scatter(xm, ym,c = 'm', marker = 'o', label = "Meitenes")
plt.title("Stress/miera pulss")
plt.xlabel("Miera stāvokļa pulss")
plt.ylabel("Vidējais pulss stresa laikā")
x = np.array([78, 82, 76, 74, 69, 65, 70, 62, 82])
y = np.array([100, 108, 90, 87, 83, 74, 79, 74, 111])
m, b = np.polyfit(x, y, 1)
plt.plot(x, m*x + b)
plt.legend(loc = 2)

plt.legend(loc = "center left", bbox_to_anchor = (1, 0.5), numpoints = 1)


plt.show()