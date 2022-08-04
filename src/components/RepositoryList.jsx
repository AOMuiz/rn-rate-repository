import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";
import millify from "millify";
import useRepositories from "../hooks/useRepositories";

// const repositories = [
//   {
//     id: "jaredpalmer.formik",
//     fullName: "jaredpalmer/formik",
//     description: "Build forms in React, without the tears",
//     language: "TypeScript",
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
//   },
//   {
//     id: "rails.rails",
//     fullName: "rails/rails",
//     description: "Ruby on Rails",
//     language: "Ruby",
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
//   },
//   {
//     id: "django.django",
//     fullName: "django/django",
//     description: "The Web framework for perfectionists with deadlines and new.",
//     language: "Python",
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
//   },
//   {
//     id: "reduxjs.redux",
//     fullName: "reduxjs/redux",
//     description: "Predictable state container for JavaScript apps",
//     language: "TypeScript",
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
//   },
// ];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  console.log(repositories);
  const repositoryNodes = repositories
    ? repositories.repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <>
      {loading ? (
        <Text>loading...</Text>
      ) : (
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.listDetailContainer}>
                <Image
                  source={{ uri: `${item.ownerAvatarUrl}` }}
                  style={styles.image}
                />
                <View style={styles.leftContainer}>
                  <Text fontWeight="bold" fontSize="subheading">
                    {item.fullName}
                  </Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.language}>{item.language}</Text>
                </View>
              </View>
              <View style={styles.countContainer}>
                <View style={styles.count}>
                  <Text style={styles.countNumber}>
                    {millify(item.stargazersCount)}
                  </Text>
                  <Text>Stars</Text>
                </View>
                <View style={styles.count}>
                  <Text style={styles.countNumber}>
                    {millify(item.forksCount)}
                  </Text>
                  <Text>Forks</Text>
                </View>
                <View style={styles.count}>
                  <Text style={styles.countNumber}>
                    {millify(item.reviewCount)}
                  </Text>
                  <Text>Reviews</Text>
                </View>
                <View style={styles.count}>
                  <Text style={styles.countNumber}>
                    {millify(item.ratingAverage)}
                  </Text>
                  <Text>Rating</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 5,
  },
  listDetailContainer: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 20,
  },
  // leftContainer: {
  //   width: "100%",
  // },
  countContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  count: {
    alignItems: "center",
  },
  countNumber: {
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 5,
  },
  separator: {
    height: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    color: "#fff",
    padding: 5,
    width: 80,
    justifyContent: "center",
    marginTop: 5,
    textAlign: "center",
  },
  description: {
    marginTop: 5,
  },
});

export default RepositoryList;
