from collections import deque

graph = {'Abşeron': ['Bakı', 'Sumqayıt', 'Xızı', 'Qobustan', 'Hacıqabul'], 'Ağstafa': ['Qazax', 'Tovuz'], 'Ağcabədi': ['Bərdə', 'Zərdab', 'Füzuli', 'Ağdam', 'Xocavənd', 'Beyləqan'], 
'Ağdaş': ['Bərdə', 'Yevlax', 'Qəbələ', 'Göyçay', 'Ucar', 'Zərdab'], 'Ağdam': ['Xocalı', 'Kəlbəcər', 'Tərtər', 'Bərdə', 'Ağcabədi', 'Xocavənd'], 'Ağsu': ['Şamaxı', 'Hacıqabul', 'Kürdəmir', 'İsmayıllı'], 'Astara': ['Lənkəran', 'Lerik'], 'Bakı': ['Salyan', 'Hacıqabul', 'Abşeron', 'Sumqayıt'], 'Babək': ['Kəngərli', 'Şahbuz', 'Culfa', 'Naxçıvan'], 'Balakən': ['Zaqatala'], 'Bərdə': ['Yevlax', 'Ağdaş', 'Zərdab', 'Ağcabədi', 'Ağdam', 'Tərtər'], 'Beyləqan': ['Ağcabədi', 'Zərdab', 'Füzuli', 'İmişli'], 'Biləsuvar': ['İmişli', 'Saatlı', 'Sabirabad', 'Salyan', 'Neftçala', 'Cəlilabad'], 'Cəbrayıl': ['Zəngilan', 'Qubadlı', 'Xocavənd', 'Füzuli'], 'Cəlilabad': ['Biləsuvar', 'Salyan', 'Neftçala', 'Masallı', 'Yardımlı'], 'Culfa': ['Babək', 'Şahbuz', 'Ordubad'], 'Daşkəsən': ['Şəmkir', 'Kəlbəcər', 'Gədəbəy', 'Göygöl'], 'Füzuli': ['Cəbrayıl', 'Xocavənd', 'Ağcabədi', 'Beyləqan'], 
'Gəncə': ['Göygöl', 'Samux'], 'Gədəbəy': ['Tovuz', 'Şəmkir', 'Daşkəsən'], 'Goranboy': ['Samux', 'Göygöl', 'Kəlbəcər', 'Tərtər', 'Yevlax'], 'Göyçay': ['İsmayıllı', 'Kürdəmir', 'Ucar', 'Ağdaş'], 'Göygöl': ['Gəncə', 'Samux', 'Goranboy', 'Kəlbəcər', 'Daşkəsən', 'Şəmkir'], 'Hacıqabul': ['Sabirabad', 'Kürdəmir', 'Ağsu', 'Şamaxı', 'Qobustan', 'Abşeron', 'Bakı', 'Salyan'], 'İmişli': ['Beyləqan', 'Zərdab', 'Kürdəmir', 'Sabirabad', 'Saatlı', 'Biləsuvar'], 'İsmayıllı': ['Quba', 'Şamaxı', 'Ağsu', 'Kürdəmir', 'Göyçay', 'Qəbələ'], 'Kəlbəcər': ['Daşkəsən', 'Göygöl', 'Goranboy', 'Tərtər', 'Ağdam', 'Xocalı', 'Laçın'], 'Kǝngǝrli': ['Şərur', 'Babək'], 'Kürdəmir': ['Hacıqabul', 'Sabirabad', 'İmişli', 'Zərdab', 'Ucar', 'Göyçay', 'İsmayıllı', 'Ağsu'], 'Laçın': ['Kəlbəcər', 'Xocalı', 'Şuşa', 'Xocavənd', 'Qubadlı'], 'Lənkəran': ['Neftçala', 'Masallı', 'Lerik', 'Astara'], 'Lerik': ['Yardımlı', 'Masallı', 'Astara', 'Lənkəran'], 'Masallı': ['Lənkəran', 'Lerik', 'Yardımlı', 'Cəlilabad', 'Neftçala'], 'Mingəçevir': ['Yevlax'], 'Neftçala': ['Salyan', 'Biləsuvar', 'Cəlilabad', 'Masallı', 'Lənkəran'], 'Naxçıvan': ['Babək'], 'Oğuz': ['Şəki', 'Qəbələ'], 'Ordubad': ['Culfa'], 'Qəbələ': ['Oğuz', 'Qusar', 'Quba', 'İsmayıllı', 'Ağdaş', 'Göyçay'], 'Qax': ['Zaqatala', 'Şəki', 'Yevlax', 'Samux'], 'Qazax': ['Ağstafa'], 'Quba': ['Qusar', 'Xaçmaz', 'Şabran', 'Şamaxı', 'İsmayıllı', 'Qəbələ'], 'Qubadlı': ['Laçın', 'Zəngilan', 'Xocavənd', 'Cəbrayıl'], 'Qobustan': ['Şamaxı', 'Xızı', 'Abşeron', 'Hacıqabul'], 'Qusar': ['Qəbələ', 'Quba', 'Xaçmaz'], 'Sabirabad': ['Saatlı', 'İmişli', 'Kürdəmir', 'Hacıqabul', 'Salyan', 'Biləsuvar'], 'Sədərək': ['Şərur'], 'Şahbuz': ['Babək', 'Culfa'], 'Şəki': ['Qax', 'Yevlax', 'Ağdaş', 'Qəbələ', 'Oğuz'], 'Salyan': ['Hacıqabul', 'Neftçala', 'Biləsuvar', 'Sabirabad', 'Bakı', 'Cəlilabad'], 'Şərur': ['Sədərək', 'Kəngərli'], 'Saatlı': ['Biləsuvar', 'İmişli', 'Sabirabad'], 'Şabran': ['Quba', 'Xaçmaz', 'Siyəzən'], 'Siyəzən': ['Şabran', 'Xızı'], 'Şəmkir': ['Tovuz', 'Gədəbəy', 'Daşkəsən', 'Göygöl', 'Samux'], 'Sumqayıt': ['Xızı', 'Abşeron', 'Bakı'], 'Şamaxı': ['Şabran', 'Quba', 'İsmayıllı', 'Ağsu', 'Hacıqabul', 'Qobustan', 'Xızı'], 'Samux': ['Gəncə', 'Göygöl', 'Şəmkir', 'Tovuz', 'Qax', 'Yevlax', 'Goranboy'], 'Şuşa': ['Xocalı', 'Xocavənd', 'Laçın'], 'Tərtər': ['Ağdam', 'Goranboy', 'Yevlax', 'Bərdə'], 'Tovuz': ['Ağstafa', 'Şəmkir', 'Gədəbəy', 'Samux'], 'Ucar': ['Göyçay', 'Kürdəmir', 'Zərdab', 'Ağdaş'], 'Xaçmaz': ['Qusar', 'Quba', 'Şabran'], 'Xocalı': ['Laçın', 'Kəlbəcər', 'Ağdam', 'Xocavənd', 'Şuşa'], 'Xızı': ['Siyəzən', 'Quba', 'Şamaxı', 'Qobustan', 'Abşeron'], 'Xocavənd': ['Ağdam', 'Ağcabədi', 'Füzuli', 'Cəbrayıl', 'Qubadlı', 'Laçın', 'Şuşa', 'Xocalı'], 'Yardımlı': ['Lerik', 'Masallı', 'Cəlilabad'], 'Yevlax': ['Ağdaş', 'Bərdə', 'Tərtər', 'Goranboy', 'Samux', 'Qax', 
'Şəki'], 'Zəngilan': ['Qubadlı', 'Cəbrayıl'], 'Zaqatala': ['Balakən', 'Qax'], 'Zərdab': ['Ucar', 'Ağdaş', 'Bərdə', 'Ağcabədi', 'Beyləqan', 'İmişli', 'Kürdəmir'],'Zəngəzur': ['Kəlbəcər', 'Laçın', 'Qubadlı', 'Zəngilan', 'Ordubad', 'Culfa', 'Şahbuz','Babək','Kəngərli','Şərur']}

def find_shortest_path(graph, start, end):
    if start == end:
        return [start]

    visited = set()
    queue = deque([(start, [start])])

    while queue:
        current_country, path = queue.popleft()
        visited.add(current_country)

        for neighbor in graph[current_country]:
            if neighbor == end:
                return path + [neighbor]

            if neighbor not in visited:
                queue.append((neighbor, path + [neighbor]))
                visited.add(neighbor)

    return None  # No path found
start_country = input("Start: ")
end_country = input("Stop: ")

shortest_path = find_shortest_path(graph, start_country, end_country)
if shortest_path:
    print("Shortest path from", start_country, "to", end_country, ":", shortest_path)
    print("Number of countries to pass through:", len(shortest_path) - 1)
else:
    print("No path found from", start_country, "to", end_country)

# queue = deque([(1,[3,4])])
# a,b = queue.popleft()
# while queue:
#     print(a,b)