import numpy as np
from sklearn.linear_model import LinearRegression

# Función para entrenar el modelo de velocidad
def entrenar_modelo():
    # Datos de ejemplo: [puntaje, tiempo_jugado, esquivo]
    X = np.array([
        [100, 30, 1],
        [200, 60, 0],
        [300, 90, 1]
    ])
    y = np.array([3, 5, 7])  # Velocidades del obstáculo

    # Crear y entrenar modelo
    modelo = LinearRegression()
    modelo.fit(X, y)
    return modelo

# Función para predecir la velocidad
def predecir_velocidad(puntaje, tiempo_jugado, esquivo):
    modelo = entrenar_modelo()
    prediccion = modelo.predict([[puntaje, tiempo_jugado, esquivo]])
    return prediccion[0]  # Valor predicho

# Ejemplo de uso directo
if __name__ == "__main__":
    puntaje = 150
    tiempo_jugado = 45
    esquivo = 1

    nueva_velocidad_obstaculo = predecir_velocidad(puntaje, tiempo_jugado, esquivo)
    print("Velocidad predicha:", nueva_velocidad_obstaculo)

    # Aquí simularías algo como:
    obstaculo_y = 0
    obstaculo_y += nueva_velocidad_obstaculo
    print("Nueva posición del obstáculo:", obstaculo_y)
