import { Stack } from "expo-router";

export default function StackLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false, // Exemplo: Oculta o cabeçalho
                animation: "fade", // Exemplo: Define a animação de transição
            }}
        />
    );
}