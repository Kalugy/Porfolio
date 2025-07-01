import pygame
import csv
import os
import random
import numpy as np
from sklearn.linear_model import LinearRegression

# ========== MODELO ML ==========
def entrenar_modelo():
    # Datos simulados: puntaje, tiempo, esquivo
    X = np.array([
        [100, 30, 1],
        [200, 60, 0],
        [300, 90, 1]
    ])
    y = np.array([3, 5, 7])  # Velocidades
    modelo = LinearRegression()
    modelo.fit(X, y)
    return modelo

def predecir_velocidad(puntaje, tiempo_jugado, esquivo):
    modelo = entrenar_modelo()
    prediccion = modelo.predict([[puntaje, tiempo_jugado, esquivo]])
    return int(prediccion[0])
# ===============================

# Inicializar Pygame
pygame.init()
pantalla = pygame.display.set_mode((600, 400))
pygame.display.set_caption("Jugador y Obstáculo")
clock = pygame.time.Clock()

# Jugador
jugador = pygame.Rect(100, 300, 50, 50)
color_jugador = (255, 255, 255)
velocidad_jugador = 6

# Obstáculo
obstaculo = pygame.Rect(300, 0, 50, 50)
color_obstaculo = (0, 0, 255)
velocidad_obstaculo = 7

# CSV
archivo_csv = "datos_obstaculos.csv"
crear_archivo = not os.path.exists(archivo_csv)

with open(archivo_csv, mode='a', newline='') as archivo:
    writer = csv.writer(archivo)
    if crear_archivo:
        writer.writerow(["obstaculo_x", "obstaculo_y", "velocidad", "esquivado"])

# Simulación de puntaje y tiempo jugado
puntaje = 0
tiempo_jugado = 0

# Bucle principal
ejecutando = True
while ejecutando:
    clock.tick(30)
    tiempo_jugado += 1

    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            ejecutando = False

    # Mover jugador
    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_LEFT]:
        jugador.x -= velocidad_jugador
    if teclas[pygame.K_RIGHT]:
        jugador.x += velocidad_jugador
    if teclas[pygame.K_UP]:
        jugador.y -= velocidad_jugador
    if teclas[pygame.K_DOWN]:
        jugador.y += velocidad_jugador

    # Mover obstáculo
    obstaculo.y += velocidad_obstaculo

    # Verificar colisión
    colision = jugador.colliderect(obstaculo)

    # Si obstáculo llega al fondo
    if obstaculo.top > 400:
        esquivado = 0 if colision else 1

        # Guardar en CSV
        with open(archivo_csv, mode='a', newline='') as archivo:
            writer = csv.writer(archivo)
            writer.writerow([obstaculo.x, obstaculo.y, velocidad_obstaculo, esquivado])

        # Actualizar puntaje
        if esquivado:
            puntaje += 10

        # Reiniciar obstáculo
        obstaculo.x = random.randint(0, 550)
        obstaculo.y = 0

        # Recalcular velocidad con ML
        velocidad_obstaculo = predecir_velocidad(puntaje, tiempo_jugado, esquivado)

    # Dibujar
    pantalla.fill((0, 0, 0))
    pygame.draw.rect(pantalla, color_jugador, jugador)
    pygame.draw.rect(pantalla, color_obstaculo, obstaculo)
    pygame.display.flip()

# Salir del juego
pygame.quit()
