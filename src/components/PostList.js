import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const PostList = () => {
  const { id } = useParams();
  const notlar = useSelector((depo) => {
    return depo.notlar;
  });
  const source = id ? notlar.filter((n) => n.id == id) : notlar;

  return source.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {source.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
