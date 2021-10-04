function startGame (state, initialGameState) {
    return {
        ...state,
        gameState: {
            ...initialGameState,
            started: true,
        }
    }
};

export default startGame;