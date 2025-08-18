import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme()

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            style={
                {
                    // Normal
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)",

                    // Success
                    "--success-bg": "hsl(142.1 76.2% 36.3%)", // hijau
                    "--success-text": "hsl(0 0% 98%)",
                    "--success-border": "hsl(142.1 70.6% 28.6%)",

                    // Destructive / Error
                    "--destructive-bg": "hsl(0 84.2% 60.2%)", // merah
                    "--destructive-text": "hsl(0 0% 98%)",
                    "--destructive-border": "hsl(0 72.2% 50.6%)",
                } as React.CSSProperties
            }
            {...props}
        />
    )
}

export { Toaster }
