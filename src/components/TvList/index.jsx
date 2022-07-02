// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { Container, Grid } from "@material-ui/core";

// import { fetchTvList } from "../../store/actions/tv";

// import TvItem from "../TvItem";
// import Layout from "../../HOCs/Layout";

// import "./style.scss";

// const TvList = (props) => {
//   const dispatch = useDispatch();
//   const { loading, tvList } = useSelector((state) => state.tvList);

//   React.useEffect(() => {
//     const params = {};
//     dispatch(fetchTvList(props.type, { params }));
//   }, [dispatch, props.type]);

//   // if (loading) return <div>loading...</div>;

//   return (
//     <Layout loading={loading}>
//       <div className="bg-gray-900">
//         <Container maxWidth="lg">
//           <Grid container spacing={3}>
//             {tvList?.map((item) => {
//               return (
//                 <Grid key={item.id} item xs={12} sm={6} md={3}>
//                   <TvItem tvItem={item} />
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </Container>
//       </div>
//     </Layout>
//   );
// };

// export default TvList;
