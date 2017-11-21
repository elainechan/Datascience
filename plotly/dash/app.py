# -*- coding: utf-8 -*-
# reference: "https://plot.ly/dash/getting-started"
# run on command line: $ python3 app.py
import dash
import dash_core_components as dcc
import dash_html_components as html

app = dash.Dash()

app.layout = html.Div(children=[
    html.H1(children="Robert and Jane's Arranged Marriage"),

    html.Div(children='''
        A Happy Ending?
    '''),

    html.Div([
        dcc.Markdown(children='''
        [Made with Dash](https://plot.ly/dash/)
    ''')
    ]),

    dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                { 
                    'x': [0, 10, 20, 30],
                    'y': [0, 1, 2, 4],
                    'type': 'scatter',
                    'mode': 'lines',
                    'line': {
                        'width': 8, # set line width
                        'color': '#edf8b1' # set line color
                    },
                    'name': 'Jane'
                },
                {
                    'x': [0, 10, 20, 30],
                    'y': [8, 9, 5, 4],
                    'type': 'scatter',
                    'mode': 'lines',
                    'line': {
                        'width': 8,
                        'color': '#2c7fb8'
                    },
                    'name': 'Robert'            
                }
            ],
            'layout': {
                'title': 'Happiness Levels Over the Years',
                'xaxis': {
                    'title': 'Years Elapsed Since Wedding',
                    'showgrid': False
                },
                'yaxis': {
                    'title': 'Happiness Levels',
                    'showgrid': False
                }
            }
        }
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)