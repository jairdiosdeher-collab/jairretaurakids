import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Layers } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
  onFallbackTo2D?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('JAIRRESTAURA - ErrorBoundary capturó una excepción:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center p-6 bg-slate-900 text-white">
          <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-3xl p-6 sm:p-8 text-center space-y-5 shadow-2xl">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-white">
                El Mundo de las Soluciones
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {this.props.fallbackMessage ||
                  'Se detectó una limitación en el acelerador gráfico del dispositivo. Puedes continuar tu aventura en el Mapa Ilustrado 2D sin interrupciones.'}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              {this.props.onFallbackTo2D && (
                <button
                  type="button"
                  onClick={() => {
                    this.handleReset();
                    this.props.onFallbackTo2D?.();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Layers className="w-4 h-4" />
                  <span>Activar Mapa Ilustrado 2D</span>
                </button>
              )}

              <button
                type="button"
                onClick={this.handleReset}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reintentar</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
