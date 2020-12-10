import numpy as np
import matplotlib.pyplot as plt

xm = np.array([78, 82, 72, 76, 74, 69])
xp = np.array([65, 70, 62, 82])

ym = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44])
yp = np.array([94.94, 84.51, 99.12, 42.55])


plt.subplot(3, 4, 1)
plt.scatter(xp, yp, c = 'c', marker = 'o', label = "Puiši")
plt.scatter(xm, ym,c = 'm', marker = 'o', label = "Meitenes")
plt.title("Fiziskā sagatavotība/miera pulss")
plt.xlabel("Miera stāvokļa pulss")
plt.ylabel("Fiziskās sagatavotības indekss")
x = np.array([78, 82, 72, 77, 74, 69, 65, 70, 62, 82])
y = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44, 94.94, 84.51, 99.12, 42.55])
m, b = np.polyfit(x, y, 1)
plt.plot(x, m*x + b)
plt.legend(loc = 3)
plt.legend(loc = "center left", bbox_to_anchor = (1, 0.5), numpoints = 1)



xm = np.array([78, 82, 72, 76, 74, 69])
xp = np.array([65, 70, 62, 82])

ym = np.array([100, 108, 117, 90, 87, 83])
yp = np.array([74, 79, 74, 111])

plt.subplot(3, 4, 3)
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


xm = np.array([100, 108, 117, 90, 87, 83])
xp = np.array([74, 79, 74, 111])

ym = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44])
yp = np.array([94.94, 84.51, 99.12, 42.55])

plt.subplot(3, 4, 9)
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



x1 = np.array([78, 82, 72, 77, 74, 69, 65, 70, 62, 82])
y1 = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44, 94.94, 84.51, 99.12, 42.55])

x2 = np.array([87, 88, 76, 81, 75, 80, 73, 80, 67, 84])
y2 = np.array([42.74, 56.28, 87.51, 71.09, 69.15, 84.59, 74.26, 60.22, 83.16, 83.18])

plt.subplot(3, 4, 11)
plt.scatter(x1, y1, c = 'g', marker = 'o', label = "Pirms karantīnas")
plt.scatter(x2, y2, c = 'r', marker = 'o', label = "Pēc karantīnas")
plt.title("Pirms un pēc karantīnas")
plt.xlabel("Miera stāvokļa pulss")
plt.ylabel("Fiziskās sagatavotības indekss")
plt.legend(loc = 3)
plt.legend(loc = "center left", bbox_to_anchor = (1, 0.5), numpoints = 1)


xDaj = np.array([78, 87])
yDaj = np.array([44.44, 42.74])
plt.plot(xDaj, yDaj)

xKr = np.array([82, 88])
yKr = np.array([46.32, 56.28])
plt.plot(xKr, yKr)

xMa = np.array([72, 76])
yMa = np.array([90.91, 87.51])
plt.plot(xMa, yMa)

xGu = np.array([77, 81])
yGu = np.array([83.33, 71.09])
plt.plot(xGu, yGu)

xZa = np.array([74, 75])
yZa = np.array([78.95, 69.15])
plt.plot(xZa, yZa)

xIe = np.array([69, 80])
yIe = np.array([74.44, 84.59])
plt.plot(xIe, yIe)

xDa = np.array([65, 73])
yDa = np.array([94.94, 74.26])
plt.plot(xDa, yDa)

xAr = np.array([70, 80])
yAr = np.array([84.51, 60.22])
plt.plot(xAr, yAr)

xRe = np.array([62, 67])
yRe = np.array([99.12, 83.16])
plt.plot(xRe, yRe)

xRo = np.array([82, 84])
yRo = np.array([42.55, 83.18])
plt.plot(xRo, yRo)

plt.subplots_adjust(left=0.125,
                    bottom=0.1, 
                    right=0.9, 
                    top=0.9, 
                    wspace=0.6, 
                    hspace=0.6)


plt.show()