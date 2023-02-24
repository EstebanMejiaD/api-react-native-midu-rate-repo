import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";

import ReposItem from "./ReposItem.jsx";

const ReposList = () => {
  const [reposiroties, setReposiroties] = useState();

  const fetchRepositories = async () => {
    const response = await globalThis.fetch("http://localhost:5000/api/repositories");
    
    const json = await response.json();
    console.log(json)
    setReposiroties(json)
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const reposetoryNodes = reposiroties
    ? reposiroties.edges.map(edge=> edge.node)
    : []
    
  
  return (
    <FlatList
      data={reposetoryNodes}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => <ReposItem repo={repo} />}
    ></FlatList>
  );
};

export default ReposList;
