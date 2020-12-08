import numpy as np
import matplotlib.pyplot as plt

xm = np.array([78, 88, 72, 81, 75, 69])
xp = np.array([65, 70, 62, 82])

ym = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44])
yp = np.array([94.94, 84.51, 99.12, 42.55])


plt.subplot(2, 2, 1)
plt.scatter(xm, ym)
plt.scatter(xp, yp)
plt.title("Pirms karantīnas")
plt.xlabel("Miera stāvokļa pulss")
plt.ylabel("Fiziskās sagatavotības indekss")
x = np.array([78, 88, 72, 81, 75, 69, 65, 70, 62, 82])
y = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44, 94.94, 84.51, 99.12, 42.55])
m, b = np.polyfit(x, y, 1)
plt.plot(x, m*x + b)




xm = np.array([78, 88, 72, 81, 75, 69])
xp = np.array([65, 70, 62, 82])

ym = np.array([100, 108, 117, 90, 87, 83])
yp = np.array([74, 79, 74, 111])

plt.subplot(2, 2, 2)
plt.scatter(xm, ym)
plt.scatter(xp, yp)
plt.title("Pirms karantīnas")
plt.xlabel("Miera stāvokļa pulss")
plt.ylabel("Vidējais pulss stresa laikā")
x = np.array([78, 88, 81, 75, 69, 65, 70, 62, 82])
y = np.array([100, 108, 90, 87, 83, 74, 79, 74, 111])
m, b = np.polyfit(x, y, 1)
plt.plot(x, m*x + b)



xm = np.array([100, 108, 117, 90, 87, 83])
xp = np.array([74, 79, 74, 111])

ym = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44])
yp = np.array([94.94, 84.51, 99.12, 42.55])

plt.subplot(2, 2, 3)
plt.scatter(xm, ym)
plt.scatter(xp, yp)
plt.title("Pirms karantīnas")
plt.xlabel("Vidējais pulss stresa laikā")
plt.ylabel("Fiziskās sagatavotības indekss")
x = np.array([100, 108, 90, 87, 83, 74, 79, 74, 111])
y = np.array([44.44, 46.32, 83.33, 78.95, 74.44, 94.94, 84.51, 99.12, 42.55])
m, b = np.polyfit(x, y, 1)
plt.plot(x, m*x + b)



x1 = np.array([78, 88, 72, 81, 75, 69, 65, 70, 62, 82])
y1 = np.array([44.44, 46.32, 90.91, 83.33, 78.95, 74.44, 94.94, 84.51, 99.12, 42.55])

x2 = np.array([87, 82, 76, 77, 74, 80, 73, 72, 67, 84])
y2 = np.array([60, 76.92, 50, 71.09, 92.59, 101.35, 74.26, 50, 50, 95.24])

plt.subplot(2, 2, 4)
plt.scatter(x1, y1)
plt.scatter(x2, y2)
plt.title("Pirms un pēc karantīnas")
plt.xlabel("Miera stāvokļa pulss")
plt.ylabel("Fiziskās sagatavotības indekss")


xDaj = np.array([78, 87])
yDaj = np.array([44.44, 60])
plt.plot(xDaj, yDaj)

xKr = np.array([88, 82])
yKr = np.array([46.32, 76.92])
plt.plot(xKr, yKr)

xMa = np.array([72, 76])
yMa = np.array([90.91, 50])
plt.plot(xMa, yMa)

xGu = np.array([81, 77])
yGu = np.array([83.33, 71.09])
plt.plot(xGu, yGu)

xZa = np.array([75, 74])
yZa = np.array([78.95, 92.59])
plt.plot(xZa, yZa)

xIe = np.array([69, 80])
yIe = np.array([74.44, 101.35])
plt.plot(xIe, yIe)

xDa = np.array([65, 73])
yDa = np.array([94.94, 74.26])
plt.plot(xDa, yDa)

xAr = np.array([70, 72])
yAr = np.array([84.51, 50])
plt.plot(xAr, yAr)

xRe = np.array([62, 67])
yRe = np.array([99.12, 50])
plt.plot(xRe, yRe)

xRo = np.array([82, 84])
yRo = np.array([42.55, 95.24])
plt.plot(xRo, yRo)

plt.subplots_adjust(left=0.125,
                    bottom=0.1, 
                    right=0.9, 
                    top=0.9, 
                    wspace=0.6, 
                    hspace=0.6)
plt.show()                    
