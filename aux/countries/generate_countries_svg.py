# Run this file while in the webcrumbs main directory to update the COUNTRIES.svg and COUNTRIES-S.svg files
## python aux/countries/generate_countries_svg.py
## python3 aux/countries/generate_countries_svg.py

import base64
import os

def find_country_svg(country):
    normalized_country = country.lower() + '.svg'
    svg_filenames = os.listdir('aux/countries/flags')
    flags = [name for name in svg_filenames if normalized_country == name]
    if len(flags) == 0:
        print('ERROR: No flags found for country: ' + country)
    elif len(flags) > 1:
        print('ERROR: Multiple flags found for country: ' + country)
    elif len(flags) == 1:
        print('Found flag for country: ' + country + ' - ' + flags[0])
        return flags[0]

def generate_svg(countries, filename="_test.svg", size=48, margin=10, align='left'):
    svg_width = 600
    items_per_row = svg_width // (size + margin)
    svg_height = size * ((len(countries) - 1) // items_per_row + 1) + margin * ((len(countries) // items_per_row + 1))

    last_row_count = len(countries) % items_per_row or items_per_row
    last_row_offset = (svg_width - (last_row_count * size + (last_row_count - 1) * margin)) // 2

    svg_list = [
        f'<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{svg_width}" height="{svg_height}">'
    ]

    countries = sorted(set(countries))

    for i, country in enumerate(countries):
        if (i // items_per_row) == ((len(countries) - 1) // items_per_row) and align == 'center':
            x = last_row_offset + (i % items_per_row) * (size + margin)
        else:
            x = margin + (i % items_per_row) * (size + margin)
        y = margin + (i // items_per_row) * (size + margin)

        svg_filename = find_country_svg(country)
        if svg_filename:
            with open('aux/countries/flags/' + svg_filename, 'r') as f:
                svg = f.read()
                base64encoded = 'data:image/svg+xml;base64,' + base64.b64encode(svg.encode('utf-8')).decode('utf-8')
                svg_list.append(f'<image x="{x}" y="{y}" width="{size}" height="{size}" alt="{country}" href="{base64encoded}" />')

    svg_list.append('</svg>')
    svg_output = '\n'.join(svg_list)

    with open(f"aux/countries/{filename}", 'w') as f:
        f.write(svg_output)
    return 

def get_countries():
    countries = []
    with open('aux/countries/COUNTRIES.svg', 'r') as f:
        for line in f:
            if 'alt="' in line:
                country = line.split('alt="')[1].split('"')[0]
                countries.append(country)
    new_countries = input('Enter new countries (comma separated): ')
    if new_countries:
        countries += [new_country for new_country in new_countries.split(',') if new_country not in countries]
    print(f'Found {len(countries)} countries: ' + ', '.join(countries) + '.')
    return countries

def generate_svgs():
    countries = get_countries()
    generate_svg(countries, filename='COUNTRIES.svg', size=48, margin=10, align='left')
    generate_svg(countries, filename='COUNTRIES-S.svg', size=16, margin=4, align='center')

generate_svgs()