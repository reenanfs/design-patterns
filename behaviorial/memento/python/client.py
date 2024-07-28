from caretaker import SaveHistory
from originator import Game


game = Game(level=1, health=100)

# Create a save history instance
save_history = SaveHistory()

# Save the current state
saved_state = game.save()
save_history.save(saved_state)

# Update game state
game.level = 2
game.health = 80
print(f"Current game state: {game.display()}")

# Restore the saved state
restored_state = save_history.restore(0)
if restored_state:
    game.restore(restored_state)
print(f"Restored game state: {game.display()}")
