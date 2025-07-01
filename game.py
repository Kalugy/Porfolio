import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up the window
width = 640
height = 480
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Game basic movement pygame")

# Colors
RED = (255, 0, 0)
BACKGROUND = (30, 30, 30)

# Player (red square)a
player = pygame.Rect(300, 220, 40, 40)
speed = 5

# Clock for controlling FPS
clock = pygame.time.Clock()

# Main loop
running = True
while running:
    clock.tick(30)  # Limit to 30 FPS

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        # ESC key to quit
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                running = False

    # Key press handling
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        player.x -= speed
    if keys[pygame.K_RIGHT]:
        player.x += speed
    if keys[pygame.K_UP]:
        player.y -= speed
    if keys[pygame.K_DOWN]:
        player.y += speed

    # Keep player within screen bounds
    player.x = max(0, min(player.x, width - player.width))
    player.y = max(0, min(player.y, height - player.height))

    # Drawing
    screen.fill(BACKGROUND)
    pygame.draw.rect(screen, RED, player)
    pygame.display.flip()

# Exit
pygame.quit()
sys.exit()
