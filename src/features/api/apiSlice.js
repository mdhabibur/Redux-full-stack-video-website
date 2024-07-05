import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "videosApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://redux-full-stack-video-website-shumit.onrender.com'
    }),
    //for cashing and revalidation
    tagTypes: ["Videos", "Video", "RelatedVideos"],
    //this tag will be whitelisted to the browser for cashing and revalidation

    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => '/videos',
            keepUnusedDataFor: 600, //for 10 min getVideos() api will be unused , after that period , getVideos() will refetch
            providesTags: ["Videos"],
            //this "Videos" tags will cache the 'getVideos' query and 'all videos' to the local browser and as soon as we will call 'invalidatesTags' for this tag, 'getVideos' api will be called to refetch the videos again


        }),
        getSingleVideo: builder.query({
            query: (videoId) => `/videos/${videoId}`,
            //for dynamic tags syntax
            providesTags: (result, error, arg) => [{
                type: "Video", id: arg
            }],
            //so for each video, the cache tag will be different related to its id
            //this 'result' is the result of the query, error is for error and the arg is the object/variable passed to the query, here 'videoId'
        }),
        getRelatedVideos: builder.query({
            query: ({id, title}) => {
                //ex: http://localhost:9000/videos?title_like=css&title_like=introduction&_limit=2
                let queryString = null
                const tags = title.split(" ")
                queryString = tags.map(tag => `title_like=${tag}`).join("&") + `id_ne=${id}&_limit=4`
                return '/videos?' + queryString
            },
            providesTags: (result, error, arg) => [
                {type: "RelatedVideos", id: arg.id}
            ],
        }),
        addVideo: builder.mutation({
            query: (videoData) => ({
                url: '/videos',
                method: 'POST',
                body: videoData
            }),
            invalidatesTags: ["Videos"]
            //so when a new video is added, it will invalidate the tag for 'getVideos' query so it will refetch the videos again
        }),

        editVideo: builder.mutation({
            query: ({id: videoId, videoData: updatedData}) => ({
                url: `/videos/${videoId}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: (result, error, arg) => [
                "Videos",
                {type: "Video", id: arg.videoId},
                {type: "RelatedVideos", id: arg.videoId},
                //when a video is edited, 'videos' should be reloaded, so the tag for 'getVideos' api is invalidated, and also relatedVideos and single video should be refetched again
            ]
        }),

        deleteVideo: builder.mutation({
            query: (videoId) => ({
                url: `/videos/${videoId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Videos"],

        }), 



    }),

    //configure polling intervals and refetch behavior
    // refetchOnMountOrArgChange: true,
    // refetchInterval: 5000, // Refetch every 5 seconds

})


export const {useGetVideosQuery, useGetSingleVideoQuery, useGetRelatedVideosQuery, useAddVideoMutation, useEditVideoMutation, useDeleteVideoMutation} = apiSlice